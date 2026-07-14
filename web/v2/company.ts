export interface APICompanyIndex {
  /**
   * A list of the most 4 recent companies.
   */
  recent: APICompanySimple[];

  /**
   * A list of 4 randomly picked verified companies.
   */
  featured: APICompanySimple[];

  /**
   * A list of 4 randomly picked verified companies with a cover image.
   */
  featured_cover: APICompanySimple[];
}

/**
 * A simplified structure of the virtual trucking company.
 * @see https://truckersmp.com/developers/api#operation/get-vtc
 */
export type APICompanySimple = Omit<APICompany, 'logo' | 'cover' | 'information' | 'rules' | 'requirements' | 'dlcs'>;

/**
 * A collection of social media of a virtual trucking company.
 */
export interface APICompanySocial {
  /**
   * The URL to the company's Twitter.
   */
  twitter: string | null;

  /**
   * The URL to the company's Facebook.
   */
  facebook: string | null;

  /**
   * The URL to the company's Twitch.
   */
  twitch: string | null;

  /**
   * The URL to the company's Discord.
   */
  discord: string | null;

  /**
   * The URL to the company's YouTube.
   */
  youtube: string | null;
}

/**
 * A collection of games that the virtual trucking company supports.
 */
export interface APICompanyGames {
  /**
   * Whether the company supports American Truck Simulator.
   */
  ats: boolean;

  /**
   * Whether the company supports Euro Truck Simulator 2.
   */
  ets: boolean;
}

/**
 * The recruitment status of the virtual trucking company.
 */
export type APICompanyRecruitmentStatus = 'Open' | 'Close';

/**
 * Data entry of a virtual trucking company.
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id
 */
export interface APICompany {
  /**
   * The ID of the company.
   */
  id: number;

  /**
   * The name of the company.
   */
  name: string;

  /**
   * The user TruckersMP ID of the company's owner.
   */
  owner_id: number;

  /**
   * The username of the company's owner.
   */
  owner_username: string;

  /**
   * The company's slogan.
   */
  slogan: string;

  /**
   * The company's tag.
   */
  tag: string;

  /**
   * The URL to the logo used on the website.
   */
  logo: string;

  /**
   * The URL to the cover photo used on the website.
   */
  cover: string;

  /**
   * The company's information in Markdown.
   */
  information: string;

  /**
   * The company's rules in Markdown.
   */
  rules: string;

  /**
   * The company's requirements in Markdown.
   */
  requirements: string;

  /**
   * The URL to the company's website.
   */
  website: string | null;

  /**
   * A collection of social media profiles of the company.
   */
  social: APICompanySocial;

  /**
   * A collection of games that the company supports.
   */
  games: APICompanyGames;

  /**
   * The company's required DLCs.
   *
   * - Empty array when no DLCs are required;
   * - Record<string, string> when DLCs are required, where the key is the Steam app ID and value is the DLC's name.
   */
  dlcs: Record<string, string> | [];

  /**
   * The company's member count.
   */
  members_count: number;

  /**
   * The status of the company's recruitment.
   */
  recruitment: APICompanyRecruitmentStatus;

  /**
   * The company's main language.
   */
  language: string;

  /**
   * Whether the company is verified.
   */
  verified: boolean;

  /**
   * Whether the company is validated.
   */
  validated: boolean;

  /**
   * The date and time the company was created at (UTC).
   */
  created: string;
}

/**
 * Information of the virtual trucking company's news.
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-news
 */
export interface APICompanyNews {
  /**
   * A list of the actual company's news entries.
   */
  news: APICompanyNewsEntry[];
}

/**
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-news-news_id
 */
export interface APICompanyNewsEntry {
  /**
   * The ID of the article.
   */
  id: number;

  /**
   * The title of the article.
   */
  title: string;

  /**
   * A summary of the article.
   */
  content_summary: string;

  /**
   * The user's TruckersMP ID who made the article.
   */
  author_id: number;

  /**
   * The username of the user who made the article.
   */
  author: string;

  /**
   * Whether the article is pinned.
   */
  pinned: boolean;

  /**
   * The date and time the article was updated at (UTC).
   */
  updated_at: string;

  /**
   * The date and time the article was published at (UTC).
   */
  published_at: string;
}

/**
 * Information of the virtual trucking company's roles.
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-roles
 */
export interface APICompanyRoles {
  /**
   * A list of the actual company's roles.
   */
  roles: APICompanyRole[];
}

/**
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-role-role_id
 */
export interface APICompanyRole {
  /**
   * The ID of the role.
   */
  id: number;

  /**
   * The name of the role.
   */
  name: string;

  /**
   * The current position of the role.
   */
  order: number;

  /**
   * The current color of the role.
   */
  color: string;

  /**
   * If the role has owner permissions.
   */
  owner: boolean;

  /**
   * The date and time the role was created (UTC).
   */
  created_at: string;

  /**
   * The date and time the role was updated at (UTC).
   */
  updated_at: string;
}

/**
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-members
 */
export interface APICompanyMembers {
  /**
   * A list of the actual company members.
   */
  members: APICompanyMember[];
}

/**
 * Information of the specific member of a virtual trucking company.
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-member-member_id
 */
export interface APICompanyMember {
  /**
   * The ID of the company member.
   */
  id: number;

  /**
   * The member's TruckersMP ID.
   */
  user_id: number;

  /**
   * The username of the company member.
   */
  username: string;

  /**
   * The URL to the avatar used on the website.
   */
  avatar: string;

  /**
   * The member's Steam ID.
   */
  steam_id: bigint;

  /**
   * The member's Steam ID.
   */
  steamID64: bigint;

  /**
   * The member's Steam ID.
   */
  steamID: string;

  /**
   * The member's roles in the company.
   */
  roles: APICompanyRole[];

  /**
   * The member's role ID.
   */
  role_id: number;

  /**
   * The member's role name.
   */
  role: string;

  /**
   * Whether the member has owner permissions.
   */
  is_owner: boolean;

  /**
   * The date and time the member joined at (UTC).
   */
  joinDate: string;
}

/**
 * Information of the virtual trucking company's partners.
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-partners
 */
export interface APICompanyPartnerships {
  /**
   * A list of the actual company's partners.
   */
  partners: APICompanyPartnership[];

  /**
   * The number of pending partnership requests involving the company.
   */
  pending_requests_count?: number;
}

/**
 * Information of a partnership between two virtual trucking companies.
 * @see https://truckersmp.com/developers/api#operation/get-vtc-id-partners
 */
export interface APICompanyPartnership {
  /**
   * The ID of the partnership.
   */
  id: number;

  /**
   * The status of the partnership. The API returns only accepted partnership requests.
   */
  status: 'Accepted';

  /**
   * The date and time the partnership was requested at by the sender (UTC).
   */
  created_at: string;

  /**
   * The date and time the partnership was updated at (UTC). This will be due to the status changing.
   */
  updated_at: string;

  /**
   * Data of the company that sent the partnership request.
   */
  sender: APICompany;

  /**
   * Data of the company that received the partnership request.
   */
  receiver: APICompany;
}
