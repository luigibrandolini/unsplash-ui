import { PicLinks } from "./PicLinks";
import { PicUrls } from "./PicUrls";

export interface Picture {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: PicUrls;
  links: PicLinks;
  likes: number;
  liked_by_user: boolean;
}