import type { APITrafficServer } from "./server";

/**
 * The congestion severity of the given location.
 */
export type APITrafficLocationSeverity =
  | "Empty"
  | "Low"
  | "Moderate"
  | "Congested"
  | "Heavy";

/**
 * Information about a traffic location on the map.
 */
export interface APITrafficLocation {
  /**
   * A unique identifier of the traffic location.
   */
  id: number;

  /**
   * A name identifier of the location.
   */
  name: string;

  /**
   * The country name of the location is in.
   */
  country: string;

  /**
   * The severity of the congestion at the location.
   */
  severity: APITrafficLocationSeverity;

  /**
   * The amount of players currently located at the place.
   */
  players: number;
}

/**
 * Response type for the busiest locations on the game server.
 */
export interface APITrafficServerTop {
  /**
   * Determines whether the service is offline. If this is the case, no servers
   * and/or traffic information may be provided.
   */
  offline: boolean;

  /**
   * Basic information of a TruckersMP server.
   * @see https://truckersmp.com/developers/api#operation/get-servers
   */
  server?: Omit<APITrafficServer, "urls">;

  /**
   * 8 busiest locations on the map (descending order).
   */
  top?: APITrafficLocation[];
}

/**
 * Response type for all locations on the game server.
 */
export type APITrafficServerTraffic =
  | {
      /**
       * Determines whether the service is offline. If this is the case, no servers
       * and/or traffic information may be provided.
       */
      offline: false;

      /**
       * Basic information of a TruckersMP server.
       * @see https://truckersmp.com/developers/api#operation/get-servers
       */
      server: Omit<APITrafficServer, "urls">;

      /**
       * All locations on the map.
       */
      traffic: APITrafficLocation[];
    }
  | {
      /**
       * Determines whether the service is offline. If this is the case, no servers
       * and/or traffic information may be provided.
       */
      offline: true;

      /**
       * Basic information of a TruckersMP server.
       * @see https://truckersmp.com/developers/api#operation/get-servers
       */
      server?: never;

      /**
       * All locations on the map.
       */
      traffic?: never;
    };
