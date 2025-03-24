export interface IActivity {
    resource_state?:                number;
    athlete?:                       Athlete;
    name?:                          string;
    distance?:                      number;
    moving_time?:                   number;
    elapsed_time?:                  number;
    total_elevation_gain?:          number;
    type?:                          string;
    sport_type?:                    string;
    workout_type?:                  number;
    id?:                            number;
    start_date?:                    Date;
    start_date_local?:              Date;
    timezone?:                      string;
    utc_offset?:                    number;
    location_city?:                 null;
    location_state?:                null;
    location_country?:              null;
    achievement_count?:             number;
    kudos_count?:                   number;
    comment_count?:                 number;
    athlete_count?:                 number;
    photo_count?:                   number;
    map?:                           Map;
    trainer?:                       boolean;
    commute?:                       boolean;
    manual?:                        boolean;
    private?:                       boolean;
    visibility?:                    Visibility;
    flagged?:                       boolean;
    gear_id?:                       string;
    start_latlng?:                  number[];
    end_latlng?:                    number[];
    average_speed?:                 number;
    max_speed?:                     number;
    average_cadence?:               number;
    average_watts?:                 number;
    max_watts?:                     number;
    weighted_average_watts?:        number;
    device_watts?:                  boolean;
    kilojoules?:                    number;
    has_heartrate?:                 boolean;
    average_heartrate?:             number;
    max_heartrate?:                 number;
    heartrate_opt_out?:             boolean;
    display_hide_heartrate_option?: boolean;
    elev_high?:                     number;
    elev_low?:                      number;
    upload_id?:                     number;
    upload_id_str?:                 string;
    external_id?:                   string;
    from_accepted_tag?:             boolean;
    pr_count?:                      number;
    total_photo_count?:             number;
    has_kudoed?:                    boolean;
    description?:                   string;
    calories?:                      number;
    perceived_exertion?:            null;
    prefer_perceived_exertion?:     boolean;
    segment_efforts?:               SegmentEffort[];
    splits_metric?:                 Splits[];
    splits_standard?:               Splits[];
    laps?:                          Lap[];
    best_efforts?:                  BestEffort[];
    gear?:                          Gear;
    photos?:                        Photos;
    stats_visibility?:              StatsVisibility[];
    hide_from_home?:                boolean;
    device_name?:                   string;
    embed_token?:                   string;
    similar_activities?:            SimilarActivities;
    // available_zones?:               any[];
}

export interface Athlete {
    id?:             number;
    resource_state?: number;
}

export interface BestEffort {
    id?:               number;
    resource_state?:   number;
    name?:             string;
    activity?:         Activity;
    athlete?:          Athlete;
    elapsed_time?:     number;
    moving_time?:      number;
    start_date?:       Date;
    start_date_local?: Date;
    distance?:         number;
    pr_rank?:          null;
    // achievements?:     any[];
    start_index?:      number;
    end_index?:        number;
}

export interface Activity {
    id?:             number;
    visibility?:     Visibility;
    resource_state?: number;
}

export enum Visibility {
    FollowersOnly = "followers_only",
}

export interface Gear {
    id?:                 string;
    primary?:            boolean;
    name?:               string;
    nickname?:           string;
    resource_state?:     number;
    retired?:            boolean;
    distance?:           number;
    converted_distance?: number;
}

export interface Lap {
    id?:                   number;
    resource_state?:       number;
    name?:                 string;
    activity?:             Activity;
    athlete?:              Athlete;
    elapsed_time?:         number;
    moving_time?:          number;
    start_date?:           Date;
    start_date_local?:     Date;
    distance?:             number;
    average_speed?:        number;
    max_speed?:            number;
    lap_index?:            number;
    split?:                number;
    start_index?:          number;
    end_index?:            number;
    total_elevation_gain?: number;
    average_cadence?:      number;
    device_watts?:         boolean;
    average_watts?:        number;
    average_heartrate?:    number;
    max_heartrate?:        number;
    pace_zone?:            number;
}

export interface Map {
    id?:               string;
    polyline?:         string;
    resource_state?:   number;
    summary_polyline?: string;
}

export interface Photos {
    primary?: null;
    count?:   number;
}

export interface SegmentEffort {
    id?:                number;
    resource_state?:    number;
    name?:              string;
    activity?:          Activity;
    athlete?:           Athlete;
    elapsed_time?:      number;
    moving_time?:       number;
    start_date?:        Date;
    start_date_local?:  Date;
    distance?:          number;
    start_index?:       number;
    end_index?:         number;
    average_cadence?:   number;
    device_watts?:      boolean;
    average_watts?:     number;
    average_heartrate?: number;
    max_heartrate?:     number;
    segment?:           Segment;
    pr_rank?:           number | null;
    achievements?:      Achievement[];
    visibility?:        Visibility;
    hidden?:            boolean;
}

export interface Achievement {
    type_id?: number;
    type?:    string;
    rank?:    number;
}

export interface Segment {
    id?:                 number;
    resource_state?:     number;
    name?:               string;
    activity_type?:      string;
    distance?:           number;
    average_grade?:      number;
    maximum_grade?:      number;
    elevation_high?:     number;
    elevation_low?:      number;
    start_latlng?:       number[];
    end_latlng?:         number[];
    elevation_profile?:  null;
    elevation_profiles?: null;
    climb_category?:     number;
    city?:               string;
    state?:              string;
    country?:            string;
    private?:            boolean;
    hazardous?:          boolean;
    starred?:            boolean;
}

export interface SimilarActivities {
    effort_count?:        number;
    average_speed?:       number;
    min_average_speed?:   number;
    mid_average_speed?:   number;
    max_average_speed?:   number;
    pr_rank?:             null;
    frequency_milestone?: null;
    trend?:               Trend;
    resource_state?:      number;
}

export interface Trend {
    speeds?:                 number[];
    current_activity_index?: number;
    min_speed?:              number;
    mid_speed?:              number;
    max_speed?:              number;
    direction?:              number;
}

export interface Splits {
    distance?:                     number;
    elapsed_time?:                 number;
    elevation_difference?:         number;
    moving_time?:                  number;
    split?:                        number;
    average_speed?:                number;
    average_grade_adjusted_speed?: number;
    average_heartrate?:            number;
    pace_zone?:                    number;
}

export interface StatsVisibility {
    type?:       string;
    visibility?: string;
}
