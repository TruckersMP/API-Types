/**
 * Information of all the current, upcoming, and featured TruckersMP events.
 * @see https://truckersmp.com/developers/api#operation/get-v2-events
 */
export interface APIGameEventIndex {
  /**
   * A list of randomly selected featured events. The maximum count is 3.
   */
  featured?: APIGameEventSimple[];

  /**
   * A list of events that happen in the next 24 hours. The maximum count is 12.
   */
  today?: APIGameEventSimple[];

  /**
   * An additional list of today events, however, the scope is 7 days. The maximum count is 12.
   *
   * This list is inclusive to `today`; events listed in that field will not appear here.
   */
  upcoming?: APIGameEventSimple[];

  /**
   * A list of events that are currently in progress.
   */
  now?: APIGameEventSimple[];
}

/**
 * A simplified structure of the game event.
 *
 * @see https://truckersmp.com/developers/api#operation/get-v2-events
 * @see https://truckersmp.com/developers/api#operation/get-user-id-events
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-events
 */
export interface APIGameEventSimple extends Omit<APIGameEvent, 'attendances'> {
  /**
   * Data of the event attendance.
   */
  attendances: Omit<APIGameEventAttendance, 'confirmed_users' | 'unsure_users' | 'confirmed_vtcs'>;
}

/**
 * A short name of an "event" game.
 */
export type APIGameEventGameName = 'ETS2' | 'ATS' | 'ETS2 - ProMods';

/**
 * The featured status of the event. The possible values are:
 *
 * - "Official" - the event is organized officially by TruckersMP
 * - "Featured" - the event is featured on the events' page on TruckersMP
 * - *Empty string* - the event has no special featured status
 */
export type APIGameEventFeaturedStatus = 'Official' | 'Featured' | '';

/**
 * Type of the game event.
 */
export interface APIGameEventType {
  /**
   * The event's type key.
   */
  key: 'convoy' | 'truck_show' | 'truck_show_and_convoy';

  /**
   * The event's type name.
   */
  name: string;
}

/**
 * Information of the event's game server.
 */
export interface APIGameEventServer {
  /**
   * The event's server ID.
   */
  id: number;

  /**
   * The event's server name.
   */
  name: string;
}

/**
 * Information of the event's game location.
 */
export interface APIGameEventLocation {
  /**
   * The specific location name.
   */
  location: string;

  /**
   * The city of the arrival/departure.
   */
  city: string;
}

export interface APIGameEventCompany {
  /**
   * The company's ID.
   */
  id: number;

  /**
   * The company's name.
   */
  name: string;
}

export interface APIGameEventUser {
  /**
   * The user's TruckersMP ID.
   */
  id: number;

  /**
   * The user's username.
   */
  username: string;
}

export interface APIGameEventAttendanceUser extends APIGameEventUser {
  /**
   * The date and time the user marked their attendance at (UTC).
   */
  created_at: string;

  /**
   * The date and time the user updated their attendance at (UTC).
   */
  updated_at: string;
}

export interface APIGameEventAttendanceCompany {
  /**
   * The company's ID.
   */
  id: number;

  /**
   * The company's name.
   */
  name: string;

  /**
   * The date and time the company marked their attendance at (UTC).
   */
  created_at: string;

  /**
   * The date and time the company updated their attendance at (UTC).
   */
  updated_at: string;
}

export interface APIGameEventAttendance {
  /**
   * The number of confirmed attendees.
   */
  confirmed: number;

  /**
   * The number of unsure attendees.
   */
  unsure: number;

  /**
   * The number of confirmed virtual trucking companies.
   */
  vtcs: number;

  /**
   * Confirmed user attendees.
   */
  confirmed_users: APIGameEventAttendanceUser[];

  /**
   * Unsure user attendees.
   */
  unsure_users: APIGameEventAttendanceUser[];

  /**
   * Confirmed company attendees.
   */
  confirmed_vtcs: APIGameEventAttendanceCompany[];
}

/**
 * Information of the specific game event.
 *
 * @see https://truckersmp.com/developers/api#operation/get-events-id
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-events-event_id
 */
export interface APIGameEvent {
  /**
   * The event's ID.
   */
  id: number;

  /**
   * The event's type.
   */
  event_type: APIGameEventType;

  /**
   * The event's name.
   */
  name: string;

  /**
   * The event's slug.
   */
  slug: string;

  /**
   * The event's game.
   */
  game: APIGameEventGameName;

  /**
   * The event's server information.
   */
  server: APIGameEventServer;

  /**
   * The event's main language.
   */
  language: string;

  /**
   * The departure location of the convoy.
   */
  departure: APIGameEventLocation;

  /**
   * The arrival location of the convoy.
   */
  arrive: APIGameEventLocation;

  /**
   * The date and time the event's meetup is scheduled at (UTC).
   */
  meetup_at: string | null;

  /**
   * The date and time the event starts at (UTC).
   */
  start_at: string;

  /**
   * The URL to the banner used on the website.
   */
  banner: string | null;

  /**
   * The URL to the map used on the website.
   */
  map: string | null;

  /**
   * The event's description in Markdown.
   */
  description: string;

  /**
   * The event's rules in Markdown.
   */
  rule: string | null;

  /**
   * The URL to the event's voice location.
   */
  voice_link: string | null;

  /**
   * The external URL specified for the event.
   */
  external_link: string | null;

  /**
   * The featured status of the event.
   */
  featured: APIGameEventFeaturedStatus;

  /**
   * Data of the company that hosts the event.
   */
  vtc: APIGameEventCompany | null;

  /**
   * The user that created the event.
   */
  user: APIGameEventUser;

  /**
   * Data of the event attendance.
   */
  attendances: APIGameEventAttendance;

  /**
   * The event's required DLCs.
   *
   * - Empty array when no DLCs are required;
   * - Record<string, string> when DLCs are required, where the key is the Steam app ID and value is the DLC's name.
   */
  dlcs: Record<string, string> | [];

  /**
   * The relative URL to the event page.
   */
  url: string;

  /**
   * The date and time the event was created at (UTC).
   */
  created_at: string;

  /**
   * The date and time the event was updated at (UTC).
   */
  updated_at: string;
}
