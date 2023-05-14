export type {
  PublicStackParams,
  PublicNavigationProps,
  RootRouteProps,
  PrivateStackParams,
  PrivateRootRouteProps,
} from './allRoutes';
interface PatronDetails {
  user_id: string;
  user_first_name: string;
  user_last_name: string;
  user_profile_img: string;
}

interface Patrons {
  details: PatronDetails[];
  count: number;
}

export interface Campaign {
  name: string;
  category: string;
  description: string;
  image: string;
  profile_icon: string;
  likes_count: number;
  comments_count: number;
  campaign_name: string;
  campaign_collection: number;
  campaign_goal: number;
  campaign_end_date: number;
  patrons: Patrons;
}
