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
   * Name of the admin that banned the user.
   */
  adminName: string;

  /**
   * TruckersMP ID for the admin that banned the user.
   */
  adminID: number;
}
