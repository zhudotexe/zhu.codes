import {PAISSADB_BASE, PAISSADB_WS_URL} from "@/utils/constants";
import {
    DistrictDetail,
    OpenPlotDetail,
    PlotUpdate,
    SoldPlotDetail,
    WorldDetail,
    WorldSummary,
    WSMessage
} from "@/utils/paissa/types";
import axios from "axios";

interface PlotLoc {
    world_id: number;
    district_id: number;
    ward_number: number;
    plot_number: number;
}

export interface PlotState extends PlotLoc {
    size: number;
    price: number;
    last_updated_time: number;
    purchase_system: number;
    lotto_entries: number | null;
    lotto_phase: number | null;
    lotto_phase_until: number | null;
}

export class PaissaClient {
    public plotStates: Map<PlotLoc, PlotState> = new Map<PlotLoc, PlotState>();
    public worlds: WorldSummary[] = [];

    ws: WebSocket | null = null;
    worldsLoaded: Set<number> = new Set<number>();

    // ==== lifecycle ====
    public init() {
        this.ws?.close();
        this.ws = new WebSocket(PAISSADB_WS_URL);
        this.ws.addEventListener('open', () => console.log("WS connected"));
        this.ws.addEventListener('close', () => console.log("WS closed"));
        this.ws.addEventListener('error', event => console.warn('WebSocket error: ', event));
        this.ws.addEventListener('message', event => this.onRawMessage(event.data));
    }

    public close() {
        this.ws?.close();
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
}

function extractPlotLoc(data: OpenPlotDetail | PlotUpdate | SoldPlotDetail): PlotLoc {
    return {
        world_id: data.world_id,
        district_id: data.district_id,
        ward_number: data.ward_number,
        plot_number: data.plot_number
    };
}