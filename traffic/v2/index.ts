import type { APITrafficServerGameName } from './server';

export * from './server';
export * from './traffic';

export const APITrafficVersion = '2' as const;

export const APITrafficRoutes = {
  /**
   * Route for:
   * - GET `/public/servers.json`
   *
   * @returns APIResponse<APITrafficServers>
   */
  servers() {
    return '/public/servers.json' as const;
  },

  /**
   * Route for:
   * - GET `/public/server/{game}/{url}/top.json`
   *
   * @param game A short name of a game map type
   * @param url A URL slug of a server
   *
   * @returns APIResponse<APITrafficServerTop>
   */
  top(game: APITrafficServerGameName, url: string) {
    return `/public/server/${game}/${url}/top.json` as const;
  },

  /**
   * Route for:
   * - GET `/public/server/{game}/{url}/traffic.json`
   *
   * @param game A short name of a game map type
   * @param url A URL slug of a server
   *
   * @returns APIResponse<APITrafficServerTraffic>
   */
  traffic(game: APITrafficServerGameName, url: string) {
    return `/public/server/${game}/${url}/traffic.json` as const;
  },
};

export const APITrafficRouteBases = {
  api: `https://traffic.krashnz.com/api/v${APITrafficVersion}`,
} as const;
