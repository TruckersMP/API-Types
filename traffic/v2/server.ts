/**
 * A short name of a game map type.
 */
export type APITrafficServerGameName = 'ets2' | 'promods' | 'ats';

/**
 * Basic information of a TruckersMP server.
 * @see https://truckersmp.com/developers/api#operation/get-servers
 */
export interface APITrafficServer {
  /**
   * The map ID given to the server used by ETS2Map.
   */
  id: number;

  /**
   * Name of the server.
   */
  name: string;

  /**
   * Shortname for the server.
   */
  short: string;

  /**
   * What game the server is for.
   *
   * Be aware that a Euro Truck Simulator 2 server with ProMods enabled is marked
   * as `promods` instead of `ets2`!
   */
  game: APITrafficServerGameName;

  /**
   * A URL slug to be used for other traffic API end-points.
   */
  url: string;

  /**
   * How many of the free slots are used in the server in percents (rounded down).
   */
  percent: number;

  /**
   * A HEX of the server color (starts with #).
   */
  color: string;

  /**
   * Determines the order in which servers are displayed.
   */
  order: number;

  /**
   * URLs of traffic API end-points for fetching information about the server traffic.
   */
  urls: {
    /**
     * Traffic information from 8 busiest locations on the map.
     */
    top: string;

    /**
     * Traffic information from all locations on the map.
     */
    traffic: string;
  };
}

/**
 * Response type of the traffic servers API end-point.
 */
export type APITrafficServers =
  | {
      /**
       * Determines whether the service is offline. If this is the case, no servers
       * and/or traffic information may be provided.
       */
      offline: false;

      /**
       * A collection of public game servers.
       * @see https://truckersmp.com/developers/api#operation/get-servers
       */
      servers: APITrafficServer[];
    }
  | {
      /**
       * Determines whether the service is offline. If this is the case, no servers
       * and/or traffic information may be provided.
       */
      offline: true;

      /**
       * A collection of public game servers.
       * @see https://truckersmp.com/developers/api#operation/get-servers
       */
      servers?: never;
    };
