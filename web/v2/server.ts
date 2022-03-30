/**
 * A short name of a supported game.
 */
export type APIServerGameName = 'ETS2' | 'ATS';

/**
 * Information of a TruckersMP server and its status.
 * @see https://truckersmp.com/developers/api#operation/get-servers
 */
export interface APIGameServer {
  /**
   * The ID given to the server.
   */
  id: number;

  /**
   * What game the server is for.
   */
  game: APIServerGameName;

  /**
   * The server IP address.
   */
  ip: string;

  /**
   * The port that the server runs on.
   */
  port: number;

  /**
   * Name of the server.
   */
  name: string;

  /**
   * Shortname for the server.
   */
  shortname: string;

  /**
   * Shown in-game in front of a player's ID.
   */
  idprefix: string | null;

  /**
   * If the server is online or not.
   */
  online: boolean;

  /**
   * How many players are currently on the server.
   */
  players: number;

  /**
   * Amount of players waiting in the queue to join the server.
   */
  queue: number;

  /**
   * The max amount of players allowed on the server at once.
   */
  maxplayers: number;

  /**
   * The map ID given to the server used by ETS2Map.
   */
  mapid: number;

  /**
   * Determines the order in which servers are displayed.
   */
  displayorder: number;

  /**
   * If the speed limiter is enabled on the server (110 kmh for ETS2 and 80 mph for ATS).
   */
  speedlimiter: number;

  /**
   * If server wide collisions is enabled.
   */
  collisions: boolean;

  /**
   * If cars are enabled for players.
   */
  carsforplayers: boolean;

  /**
   * If police cars can be driven by players.
   */
  policecarsforplayers: boolean;

  /**
   * If AFK kick is enabled for players.
   */
  afkenabled: boolean;

  /**
   * If the server is an event server.
   */
  event: boolean;

  /**
   * Determine whether the server hosts special event files (e.g. map edits, special cargos or new paint jobs).
   */
  specialEvent: boolean;

  /**
   * Determine whether the server hosts ProMods.
   */
  promods: boolean;

  /**
   * Server tick rate (in ms).
   */
  syncdelay: number;
}

/**
 * The current in-game time.
 *
 * Game time is expressed in minutes, where 10 real seconds is 1 minute of in-game time.
 * It is number of minutes since 2015-25-10 15:48:32 CET.
 *
 * **Note:** Game time may not be exact as time will drift.
 *
 * @see https://truckersmp.com/developers/api#operation/get-game_time
 */
export interface APIServerGameTime {
  /**
   * Game time returned in minutes (10 real seconds are 1 minute in-game).
   */
  game_time: number;
}
