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
 * Information about a TruckersMP player.
 * @see https://truckersmp.com/developers/api#operation/get-player-id
 */
export type APIPlayer = _Base & _APIPlayerVTCHistory & _APIPlayerBanData;

// #region APIPlayer

/** Base interface containing property annotations */
interface _Base {
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
}

type _APIPlayerVTCHistory = Pick<_Base, 'displayVTCHistory' | 'vtcHistory'> &
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

type _APIPlayerBanData = Pick<_Base, 'displayBans' | 'bansCount'> &
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

// #endregion APIPlayer
