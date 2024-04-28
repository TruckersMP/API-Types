/**
 * Information about a current player's ban.
 * @see https://truckersmp.com/developers/api#operation/get-bans-id
 */
export interface APIPlayerBan {
  /**
   * The time the ban will expire.
   */
  expiration: string | null;

  /**
   * The time the ban was issued.
   */
  timeAdded: string;

  /**
   * If the ban is still active.
   *
   * For the user to be banned the `expiration` date has to be passed or `active` has to be false.
   */
  active: boolean;

  /**
   * The reason for the ban.
   */
  reason: string;

  /**
   * @deprecated - v2.21.1.0
   * Name of the admin that banned the user. This field is no longer provided.
   * @see https://forum.truckersmp.com/index.php?/topic/112993-website-v221-release/#comment-1111277
   */
  adminName: 'Game Moderator';

  /**
   * @deprecated - v2.21.1.0
   * TruckersMP ID for the admin that banned the user. This field is no longer provided.
   * @see https://forum.truckersmp.com/index.php?/topic/112993-website-v221-release/#comment-1111277
   */
  adminID: null;
}
