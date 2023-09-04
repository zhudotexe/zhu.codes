// ==== websocket ====
export interface WSMessage {
  type: string;
  data?: any;
}

export interface WSPing extends WSMessage {
  type: "ping";
}

export interface WSPlotOpen extends WSMessage {
  type: "plot_open";
  data: OpenPlotDetail;
}

export interface WSPlotUpdate extends WSMessage {
  type: "plot_update";
  data: PlotUpdate;
}

export interface WSPlotSold extends WSMessage {
  type: "plot_sold";
  data: SoldPlotDetail;
}

// ==== API ====
export interface WorldSummary {
  id: number;
  name: string;
  datacenter_id: number;
  datacenter_name: string;
}

export interface WorldDetail {
  id: number;
  name: string;
  districts: DistrictDetail[];
  num_open_plots: number;
  oldest_plot_time: number;
}

export interface DistrictDetail {
  id: number;
  name: string;
  num_open_plots: number;
  oldest_plot_time: number;
  open_plots: OpenPlotDetail[];
}

// ==== data models ====
export interface OpenPlotDetail {
  world_id: number;
  district_id: number;
  ward_number: number;
  plot_number: number;
  size: number;
  price: number;
  last_updated_time: number;
  first_seen_time: number;
  est_time_open_min: number;
  est_time_open_max: number;
  purchase_system: number;
  lotto_entries: number | null;
  lotto_phase: number | null;
  lotto_phase_until: number | null;
}

export interface PlotUpdate {
  world_id: number;
  district_id: number;
  ward_number: number;
  plot_number: number;
  size: number;
  price: number;
  last_updated_time: number;
  first_seen_time: number;
  purchase_system: number;
  lotto_entries: number;
  lotto_phase: number;
  previous_lotto_phase: number | null;
  lotto_phase_until: number;
}

export interface SoldPlotDetail {
  world_id: number;
  district_id: number;
  ward_number: number;
  plot_number: number;
  size: number;
  last_updated_time: number;
  est_time_sold_min: number;
  est_time_sold_max: number;
}

// ==== enums ====
export enum PurchaseSystem {
  // FCFS = 0,  // implicit if not lottery
  LOTTERY = 1,
  FREE_COMPANY = 2,
  INDIVIDUAL = 4,
}

export enum LottoPhase {
  ENTRY = 1,
  RESULTS = 2,
  UNAVAILABLE = 3,
}

export enum HouseSize {
  SMALL = 0,
  MEDIUM = 1,
  LARGE = 2,
}
