export * from './ban';
export * from './company';
export * from './event';
export * from './player';
export * from './rules';
export * from './server';
export * from './version';

export const APIWebVersion = '2';

export const APIWebRoutes = {
  /**
   * Route for:
   * - GET `/bans/{id}`
   *
   * @param id SteamID64 or TruckersMP ID
   *
   * @returns APIResponse<APIBan[]>
   */
  bans(id: bigint) {
    return `/bans/${id}` as const;
  },

  /**
   * Route for:
   * - GET `/vtc`
   *
   * @returns APIResponse<APICompanyIndex>
   */
  companies() {
    return '/vtc' as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{id}`
   *
   * @param id Unique identifier of a company. Can be also its slug
   *
   * @returns APIResponse<APICompany>
   */
  company(id: string | number) {
    return `/vtc/${id}` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/events`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   *
   * @returns APIResponse<APIGameEventSimple[]>
   */
  companyEvents(companyId: string | number) {
    return `/vtc/${companyId}/events` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/events/{eventId}`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   * @param eventId Unique identifier of the company's event
   *
   * @returns APIResponse<APIGameEvent>
   */
  companyEvent(companyId: string | number, eventId: number) {
    return `/vtc/${companyId}/events/${eventId}` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/members`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   *
   * @returns APIResponse<APICompanyMembers>
   */
  companyMembers(companyId: string | number) {
    return `/vtc/${companyId}/members` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/member/{memberId}`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   * @param memberId Unique identifier of a company member instance
   *
   * @returns APIResponse<APICompanyMember>
   */
  companyMember(companyId: string | number, memberId: number) {
    return `/vtc/${companyId}/member/${memberId}` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/news`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   *
   * @returns APIResponse<APICompanyNews>
   */
  companyNews(companyId: string | number) {
    return `/vtc/${companyId}/news` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/news/{newsId}`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   * @param newsId Unique identifier of the company's news entry
   *
   * @returns APIResponse<APICompanyNewsEntry>
   */
  companyNewsEntry(companyId: string | number, newsId: number) {
    return `/vtc/${companyId}/news/${newsId}` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/roles`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   *
   * @returns APIResponse<APICompanyRoles>
   */
  companyRoles(companyId: string | number) {
    return `/vtc/${companyId}/roles` as const;
  },

  /**
   * Route for:
   * - GET `/vtc/{companyId}/role/{roleId}`
   *
   * @param companyId Unique identifier of a company. Can also be its slug
   * @param roleId Unique identifier of the company's role
   *
   * @returns APIResponse<APICompanyRoleEntry>
   */
  companyRole(companyId: string | number, roleId: number) {
    return `/vtc/${companyId}/role/${roleId}` as const;
  },

  /**
   * Route for:
   * - GET `/event/{id}`
   *
   * @param id Unique identifier of the event
   *
   * @returns APIResponse<APIGameEvent>
   */
  event(id: number) {
    return `/events/${id}` as const;
  },

  /**
   * Route for:
   * - GET `/event`
   *
   * @returns APIResponse<APIGameEventIndex>
   */
  events() {
    return '/events' as const;
  },

  /**
   * Route for:
   * - GET `/event/user/{id}`
   *
   * @param id TruckersMP ID of the user
   *
   * @returns APIResponse<APIGameEventSimple[]>
   */
  eventsUser(id: number) {
    return `/events/user/${id}` as const;
  },

  /**
   * Route for:
   * - GET `/player/{id}`
   *
   * @param id SteamID64 or TruckersMP ID
   *
   * @returns APIResponse<APIPlayer>
   */
  player(id: bigint) {
    return `/player/${id}` as const;
  },

  /**
   * Route for:
   * - GET `/servers`
   *
   * @returns APIResponse<APIServer[]>
   */
  servers() {
    return '/servers' as const;
  },

  /**
   * Route for:
   * - GET `/game_time`
   *
   * @returns APIResponse<APIServerGameTime>
   */
  gameTime() {
    return '/game_time' as const;
  },

  /**
   * Route for:
   * - GET `/version/`
   *
   * @returns APIVersion
   */
  version() {
    return '/version' as const;
  },

  /**
   * Route for:
   * - GET `/rules`
   *
   * @returns APIRules
   */
  rules() {
    return '/rules' as const;
  },
};

export const APIWebRouteBases = {
  api: `https://api.truckersmp.com/v${APIWebVersion}`,
  cdn: 'https://static.truckersmp.com/',
} as const;
