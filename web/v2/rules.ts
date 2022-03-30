/**
 * Current in-game rules.
 * @see https://truckersmp.com/developers/api#operation/get-rules
 */
export interface APIGameRules {
  /**
   * Markdown of the current in-game rules.
   */
  rules: string;

  /**
   * Version number.
   */
  revision: number;
}
