export interface IActivityStats {
    biggest_ride_distance?:        number;
    biggest_climb_elevation_gain?: number;
    recent_ride_totals?:           Totals;
    all_ride_totals?:              Totals;
    recent_run_totals?:            Totals;
    all_run_totals?:               Totals;
    recent_swim_totals?:           Totals;
    all_swim_totals?:              Totals;
    ytd_ride_totals?:              Totals;
    ytd_run_totals?:               Totals;
    ytd_swim_totals?:              Totals;
}

export interface Totals {
    count?:             number;
    distance?:          number;
    moving_time?:       number;
    elapsed_time?:      number;
    elevation_gain?:    number;
    achievement_count?: number;
}
