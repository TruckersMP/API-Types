import APIPlayerPatreon from './patreon';
export { type APIPlayerPatreon };

export interface APIPlayerPermissions {
  /**
   * If the user is a TruckersMP staff member.
   */
  isStaff: boolean;

  /**
   * If the user is part of upper staff within the TruckersMP team.
   */
  isUpperStaff: boolean;

  /**
   * If the user has Game Moderator permissions.
   */
  isGameAdmin: boolean;
}

/**
 * Information about player's membership in a virtual trucking company.
 */
export type APIPlayerCompanyMember = {
  /**
   * ID of the company the user belongs to or 0 if not in a company.
   */
  id: 0;

  /**
   * Name of the company the user belongs to or empty if not in a company.
   */
  name: '';

  /**
   * Tag of the company the user belongs to or empty if not in a company.
   */
  tag: '';

  /**
   * If the user is in a company.
   */
  inVTC: false;

  /**
   * Company member ID or 0 if not in a company.
   */
  memberID: 0;
} | {
  /**
   * ID of the company the user belongs to or 0 if not in a company.
   */
  id: number;

  /**
   * Name of the company the user belongs to or empty if not in a company.
   */
  name: string;

  /**
   * Tag of the company the user belongs to or empty if not in a company.
   */
  tag: string;

  /**
   * If the user is in a company.
   */
  inVTC: true;

  /**
   * Company member ID or 0 if not in a company.
   */
  memberID: number;
}

/**
 * Entry with brief information of the company the player was previously in.
 */
export interface APIPlayerCompanyHistory {
  /**
   * ID of the company.
   */
  id: number;

  /**
   * Name of the company.
   */
  name: string;

  /**
   * If the company is verified.
   */
  verified: boolean;

  /**
   * Date and time the user joined the company (UTC).
   */
  joinDate: string;

  /**
   * Date and time the user left the company (UTC).
   */
  leftDate: string;
}

/**
 * Entry with information of an achievement obtained by the player.
 */
export interface APIPlayerAchievement {
  /**
   * The ID of the achievement.
   */
  id: number;

  /**
   * The title of the achievement.
   */
  title: string;

  /**
   * The description of the achievement.
   */
  description: string;

  /**
   * The link to the achievement image.
   */
  image_url: string;

  /**
   * The date and time the user was given the achievement (UTC).
   */
  achieved_at: string;
}

/**
 * Entry with information of an award given to the player.
 */
export interface APIPlayerAward {
  /**
   * The ID of the award.
   */
  id: number;

  /**
   * The name of the award.
   */
  name: string;

  /**
   * The link to the award image.
   */
  image_url: string;

  /**
   * The date and time the user was given the award (UTC).
   */
  awarded_at: string;
}

/**
 * Information about a TruckersMP player.
 * @see https://truckersmp.com/developers/api#operation/get-player-id
 */
export type APIPlayer = _APIPlayerBase & _APIPlayerVTCHistory & _APIPlayerBanData;

/**
 * Base interface containing property annotations
 */
interface _APIPlayerBase {
  /**
   * The ID of the requested user.
   */
  id: number;

  /**
   * The name of the user.
   */
  name: string;

  /**
   * URL to the avatar used on the website.
   */
  avatar: string;

  /**
   * URL to the avatar used on the website (32px x 32px).
   */
  smallAvatar: string;

  /**
   * The date and time the user registered (UTC).
   */
  joinDate: string;

  /**
   * The SteamID64 of the user.
   */
  steamID64: bigint;

  /**
   * The SteamID64 of the user.
   */
  steamID: string;

  /**
   * The Discord account linked to the user or `null` if not linked or private.
   */
  discordSnowflake: string | null;

  /**
   * If the user's company history is visible.
   */
  displayVTCHistory: boolean;

  /**
   * The name of the group the user belongs to.
   */
  groupName: string;

  /**
   * The color of the group.
   */
  groupColor: string;

  /**
   * The ID of the group the user belongs to.
   */
  groupID: number;

  /**
   * If the user is currently banned.
   */
  banned: boolean;

  /**
   * @deprecated - v2.21.1.0
   * This field is no longer provided.
   */
  bannedUntil: null;

  /**
   * The number of active bans a user has or `null` if private.
   */
  bansCount: number | null;

  /**
   * If the user has their bans hidden.
   */
  displayBans: boolean;

  /**
   * Data of the player's Patreon status.
   */
  patreon: APIPlayerPatreon;

  /**
   * Permissions that the player has.
   */
  permissions: APIPlayerPermissions;

  /**
   * Information about player's membership in a virtual trucking company.
   */
  vtc: APIPlayerCompanyMember;

  /**
   * Entries with brief information of a company the player was in.
   *
   * If the user does not allow to see their company history, `null` will be returned instead.
   */
  vtcHistory: APIPlayerCompanyHistory[] | null;

  /**
   * List of achievements obtained by the player.
   *
   * If the user does not allow to see their achievements, `null` will be returned instead.
   */
  achievements: APIPlayerAchievement[] | null;

  /**
   * List of awards given to the player.
   *
   * If the user does not allow to see their awards, `null` will be returned instead.
   */
  awards: APIPlayerAward[] | null;
}

/**
 * Specific properties of the player object regarding their VTC history
 */
type _APIPlayerVTCHistory = Pick<_APIPlayerBase, 'displayVTCHistory' | 'vtcHistory'> &
  (
    | {
        displayVTCHistory: false;
        vtcHistory: null;
      }
    | {
        displayVTCHistory: true;
        vtcHistory: APIPlayerCompanyHistory[];
      }
  );

/**
 * Specific properties of the player object regarding bans
 */
type _APIPlayerBanData = Pick<_APIPlayerBase, 'displayBans' | 'bansCount'> &
  (
    | {
        displayBans: false;
        bansCount: null;
      }
    | {
        displayBans: true;
        bansCount: number;
      }
  );
