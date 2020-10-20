import { Category } from "./category";

export interface Post {
  _createdAt?: string;
  id?: number;
  slug?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  mainImage?: any;
  categories?: Array<Category>;
}
