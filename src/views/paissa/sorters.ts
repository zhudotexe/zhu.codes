import {PlotState} from "@/views/paissa/client";
import {isOutdatedPhase, isUnknownOrOutdatedPhase} from "@/views/paissa/utils";

export type Sorter = (a: PlotState, b: PlotState) => number;

const inverse = (f: Sorter) => ((a: PlotState, b: PlotState) => -f(a, b));

export const address: Sorter = (a, b) => a.district_id - b.district_id || a.ward_number - b.ward_number || a.plot_number - b.plot_number;

export const size = (a: PlotState, b: PlotState) => a.size - b.size;
export const sizeInverse = inverse(size);

export const price = (a: PlotState, b: PlotState) => a.price - b.price;
export const priceInverse = inverse(price);

export const entries = (a: PlotState, b: PlotState) => {
    const aVal = isOutdatedPhase(a) || a.lotto_phase === null ? Number.MAX_VALUE : (a.lotto_entries ?? 0);
    const bVal = isOutdatedPhase(b) || b.lotto_phase === null ? Number.MAX_VALUE : (b.lotto_entries ?? 0);
    return aVal - bVal;
}
export const entriesInverse = (a: PlotState, b: PlotState) => {
    // Number.MIN_VALUE is actually an epsilon and not the minimum value representable in a float
    // because *that's* not a foot-gun at all. Thanks Javascript.
    const aVal = isOutdatedPhase(a) || a.lotto_phase === null ? Number.MIN_SAFE_INTEGER : (a.lotto_entries ?? 0);
    const bVal = isOutdatedPhase(b) || b.lotto_phase === null ? Number.MIN_SAFE_INTEGER : (b.lotto_entries ?? 0);
    return bVal - aVal;
};

export const phase = (a: PlotState, b: PlotState) => {
    const aVal = isUnknownOrOutdatedPhase(a) ? Number.MAX_VALUE : a.lotto_phase!;
    const bVal = isUnknownOrOutdatedPhase(b) ? Number.MAX_VALUE : b.lotto_phase!;
    return aVal - bVal;
}
export const phaseInverse = inverse(phase);

export const updateTime = (a: PlotState, b: PlotState) => b.last_updated_time - a.last_updated_time;
export const updateTimeInverse = inverse(updateTime);