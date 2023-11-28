/** Base interface containing property annotations */
interface _Base {
  /**
   * If the user has donated or is currently donating via Patreon.
   */
  isPatron: boolean | null;

  /**
   * If the user has an active Patreon subscription.
   */
  active: boolean | null;

  /**
   * HEX code for subscribed tier.
   */
  color: string | null;

  /**
   * The tier ID of current pledge.
   */
  tierId: number | null;

  /**
   * Current pledge in cents.
   */
  currentPledge: number | null;

  /**
   * Lifetime pledge in cents.
   */
  lifetimePledge: number | null;

  /**
   * Next pledge in cents.
   */
  nextPledge: number | null;

  /**
   * If user has their Patreon information hidden.
   */
  hidden: boolean | null;
}

/** Properties specific to the `patreon` field when the information is public (not hidden) */
interface _VisiblePartial {
  lifetimePledge: number | null;
  hidden: false | null;
}

/** Properties specific to the `patreon` field when the user is an inactive patron */
interface _InactivePartial extends _VisiblePartial {
  active: false;
  color: null;
  tierId: null;
  currentPledge: null;
  nextPledge: null;
}

/** Properties specific to the `patreon` field when the user is an active patron */
interface _ActivePartial extends _VisiblePartial {
  active: true;
  color: string;
  tierId: number;
  currentPledge: number;
  nextPledge: number | null;
}

/** `patreon` field when the user has their Patreon information hidden */
export interface InfoHidden extends _Base {
  isPatron: false | null;
  active: null;
  color: null;
  tierId: null;
  currentPledge: null;
  lifetimePledge: null;
  nextPledge: null;
  hidden: true;
}

/** `patreon` field when the user is a patron (active or not) */
export type Patron = _Base & ({ isPatron: true } & (_InactivePartial | _ActivePartial));

/** `patreon` field when the user is not a patron (ie. has never donated) */
export interface NonPatron extends _InactivePartial { isPatron: false }

/**
 * Information about player's Patreon status.
 */
type APIPlayerPatreon = InfoHidden | NonPatron | Patron;
export default APIPlayerPatreon;
