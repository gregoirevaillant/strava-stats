export interface IDetailedAthlete {
    id?:                     number;
    username?:               string;
    resource_state?:         number;
    firstname?:              string;
    lastname?:               string;
    bio?:                    string;
    city?:                   string;
    state?:                  string;
    country?:                null;
    sex?:                    string;
    premium?:                boolean;
    summit?:                 boolean;
    created_at?:             Date;
    updated_at?:             Date;
    badge_type_id?:          number;
    weight?:                 number;
    profile_medium?:         string;
    profile?:                string;
    friend?:                 null;
    follower?:               null;
    blocked?:                boolean;
    can_follow?:             boolean;
    follower_count?:         number;
    friend_count?:           number;
    mutual_friend_count?:    number;
    athlete_type?:           number;
    date_preference?:        string;
    measurement_preference?: string;
    clubs?:                  Club[];
    postable_clubs_count?:   number;
    ftp?:                    null;
    bikes?:                  Bike[];
    shoes?:                  Bike[];
    is_winback_via_upload?:  boolean;
    is_winback_via_view?:    boolean;
}

export interface Bike {
    id?:                 string;
    primary?:            boolean;
    name?:               string;
    nickname?:           string;
    resource_state?:     number;
    retired?:            boolean;
    distance?:           number;
    converted_distance?: number;
}

export interface Club {
    id?:                   number;
    resource_state?:       number;
    name?:                 string;
    profile_medium?:       string;
    profile?:              string;
    cover_photo?:          string;
    cover_photo_small?:    string;
    activity_types?:       string[];
    activity_types_icon?:  string;
    dimensions?:           string[];
    sport_type?:           string;
    localized_sport_type?: string;
    city?:                 string;
    state?:                string;
    country?:              string;
    private?:              boolean;
    member_count?:         number;
    featured?:             boolean;
    verified?:             boolean;
    url?:                  string;
    membership?:           string;
    admin?:                boolean;
    owner?:                boolean;
}
