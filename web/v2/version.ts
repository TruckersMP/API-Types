/**
 * Information of a TruckersMP file in the version response.
 */
export interface APIClientFile {
  /**
   * Checksum of core.dll.
   */
  dll: string;

  /**
   * Checksum of data1.adb.
   */
  adb: string;
}

/**
 * Possible stages of the TruckersMP development process.
 */
export type APIVersionStage = 'Alpha';

/**
 * Information about the current TruckersMP version.
 * @see https://truckersmp.com/developers/api#operation/get-version
 */
export interface APIClientVersion {
  /**
   * Name of the current version.
   */
  name: string;

  /**
   * Numeric name of the current version.
   */
  numeric: string;

  /**
   * Current stage in the development process.
   */
  stage: APIVersionStage;

  /**
   * Information of ETS2MP files.
   */
  ets2mp_checksum: APIClientFile;

  /**
   * Information of ATSMP files.
   */
  atsmp_checksum: APIClientFile;

  /**
   * The time that the version was released.
   */
  time: string;

  /**
   * ETS2 version that is supported.
   */
  supported_game_version: string;

  /**
   * ATS version that is supported.
   */
  supported_ats_game_version: string;
}
