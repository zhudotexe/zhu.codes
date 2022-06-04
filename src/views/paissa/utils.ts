import {PlotState} from "@/views/paissa/client";
import {HouseSize, LottoPhase, PurchaseSystem} from "@/views/paissa/types";
import {DateTime} from "luxon";

export function isLottery(state: PlotState) {
    return (state.purchase_system & 1) === 1;
}

export function isOutdatedPhase(state: PlotState) {
    const timeSecs = +new Date() / 1000;
    return isLottery(state) && ((state.lotto_phase_until ?? 0) < timeSecs);
}

export function isEntryPhase(state: PlotState) {
    return isLottery(state) && !isOutdatedPhase(state) && state.lotto_phase === LottoPhase.ENTRY;
}

export function isUnknownOrOutdatedPhase(state: PlotState) {
    return isLottery(state) && (state.lotto_phase === null || isOutdatedPhase(state));
}

export function shouldEm(plot: PlotState): boolean {
    return !isLottery(plot) || isUnknownOrOutdatedPhase(plot);
}

export function lotteryEntryCountStr(plot: PlotState): string {
    if (!isLottery(plot)) {
        return "N/A";
    }
    if (plot.lotto_phase === null) {
        // BUG(server): sometimes, lotto_entries can be null on 0-entry plots; so we render 0 if it's not outdated
        // and only "Missing Data" if lotto_phase is null
        return "Missing Data";
    }
    if (isOutdatedPhase(plot)) {
        return "Outdated Data";
    }
    return plot.lotto_entries?.toString() ?? '0';
}

export function lotteryPhaseStr(plot: PlotState): string {
    if (!isLottery(plot)) {
        return "FCFS";
    } else if (plot.lotto_phase === null) {
        return "Missing Data";
    } else if (isOutdatedPhase(plot)) {
        return "Outdated Data"
    }
    switch (plot.lotto_phase) {
        case LottoPhase.ENTRY:
            return "Accepting Entries";
        case LottoPhase.RESULTS:
            return "Results";
        case LottoPhase.UNAVAILABLE:
            return "Unavailable";
        default:
            return `Unknown (${plot.lotto_phase})`
    }
}


export function sizeStr(size: number): string {
    switch (size) {
        case HouseSize.SMALL:
            return "Small";
        case HouseSize.MEDIUM:
            return "Medium";
        case HouseSize.LARGE:
            return "Large";
        default:
            return `Unknown (${size})`
    }
}

export function tenantStr(purchaseSystem: number): string {
    if ((purchaseSystem & (PurchaseSystem.FREE_COMPANY | PurchaseSystem.INDIVIDUAL)) == (PurchaseSystem.FREE_COMPANY | PurchaseSystem.INDIVIDUAL)) {
        return "FC, Individual"
    } else if (purchaseSystem & PurchaseSystem.FREE_COMPANY) {
        return "Free Company"
    }
    return "Individual"
}

export function updatedStr(updatedAt: number): string {
    const time = DateTime.fromSeconds(updatedAt);
    return time.toRelative() ?? "Unknown";
}