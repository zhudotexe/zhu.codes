import {PAISSADB_BASE, PAISSADB_WS_URL} from "@/utils/constants";
import {OpenPlotDetail, PlotUpdate, SoldPlotDetail, WorldDetail, WorldSummary, WSMessage} from "@/views/paissa/types";
import axios from "axios";

export interface PlotState {
    world_id: number;
    district_id: number;
    ward_number: number;
    plot_number: number;
    size: number;
    price: number;
    last_updated_time: number;
    purchase_system: number;
    lotto_entries: number | null;
    lotto_phase: number | null;
    lotto_phase_until: number | null;
}

export class PaissaClient {
    public plotStates: Map<string, PlotState> = new Map<string, PlotState>();
    public worlds: WorldSummary[] = [];
    public get isDisconnected() {
        return this.isWSDisconnected && !this.isWSConnecting;
    }

    ws: WebSocket | null = null;
    worldsLoaded: Set<number> = new Set<number>();
    districtNames: Map<number, string> = new Map<number, string>();
    isWSConnecting = false;
    isWSDisconnected = false;

    // ==== lifecycle ====
    public init() {
        this.ws?.close(1000);
        this.isWSConnecting = true;
        this.ws = new WebSocket(PAISSADB_WS_URL);
        this.ws.addEventListener('open', () => this.onWSOpen());
        this.ws.addEventListener('close', event => this.onWSClose(event));
        this.ws.addEventListener('error', event => console.warn('WebSocket error: ', event));
        this.ws.addEventListener('message', event => this.onRawMessage(event.data));
    }

    public close() {
        this.ws?.close(1000);
        this.worldsLoaded.clear();
    }

    // ==== API ====
    public async getWorlds() {
        try {
            const response = await axios.get(`${PAISSADB_BASE}/worlds`);
            this.worlds = response.data;
            console.debug(`Loaded ${this.worlds.length} world defs.`)
        } catch (error) {
            console.error("Failed to get world list:", error);
        }
    }

    public async loadWorld(worldId: number, forceReload = false) {
        console.debug(`Loading data for world ${worldId}...`)
        if (this.worldsLoaded.has(worldId) && !forceReload) {
            console.debug(`World ID ${worldId} has been loaded - skipping loadWorld.`)
            return;
        }
        this.worldsLoaded.add(worldId);

        let response;
        try {
            response = await axios.get(`${PAISSADB_BASE}/worlds/${worldId}`);
        } catch (error) {
            console.error("Failed to get world details:", error);
            return;
        }
        const world: WorldDetail = response.data;
        console.debug(`Got world detail for ${world.name} - ${world.num_open_plots} plots open.`)

        for (const district of world.districts) {
            // while we're here, populate the district names
            this.districtNames.set(district.id, district.name);
            for (const plot of district.open_plots) {
                this.plotStates.set(extractPlotLoc(plot), plot);
            }
        }
    }

    // ==== event handlers ====
    onRawMessage(data: string) {
        let message: WSMessage;
        try {
            message = JSON.parse(data);
            console.debug("RECV", message);
        } catch (e) {
            console.warn(e);
            return;
        }

        switch (message.type) {
            case "plot_open":
                return this.onPlotOpen(message.data);
            case "plot_update":
                return this.onPlotUpdate(message.data);
            case "plot_sold":
                return this.onPlotSold(message.data);
        }
    }

    onPlotOpen(event: OpenPlotDetail) {
        this.plotStates.set(extractPlotLoc(event), event);
    }

    onPlotUpdate(event: PlotUpdate) {
        this.plotStates.set(extractPlotLoc(event), event);
    }

    onPlotSold(event: SoldPlotDetail) {
        this.plotStates.delete(extractPlotLoc(event));
    }

    onWSOpen() {
        console.log("WS connected");
        this.isWSDisconnected = false;
        this.isWSConnecting = false;
    }

    onWSClose(event: CloseEvent) {
        console.log(`WS closed with ${event.code} (reason=${event.reason}; clean=${event.wasClean})`);
        this.isWSDisconnected = true;
        if (event.wasClean && event.code !== 1012) {
            this.isWSConnecting = false;
        } else if (!this.isWSConnecting) {
            // attempt reconnect with exponential backoff
            this.attemptReconnect(1);
        }
    }

    attemptReconnect(attempt: number, maxAttempts = 5) {
        if (!this.isWSDisconnected) return;
        if (attempt > maxAttempts) {
            this.isWSDisconnected = true;
            this.isWSConnecting = false;
            return;
        }
        console.log(`Attempting to reconnect (try ${attempt} of ${maxAttempts})...`)
        this.init();
        setTimeout(() => this.attemptReconnect(attempt + 1, maxAttempts), attempt * 1000 + (Math.random() * 1000));
    }

    // ==== helpers ====
    public districtName(districtId: number): string {
        return this.districtNames.get(districtId) ?? districtId.toString();
    }
}

function extractPlotLoc(data: OpenPlotDetail | PlotUpdate | SoldPlotDetail): string {
    return `${data.world_id}-${data.district_id}-${data.ward_number}-${data.plot_number}`;
}