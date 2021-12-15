import {ImageUrl} from './image-url';
import {Link} from './link';

export interface Project {
  routeParam: string;
  title: string;
  description: string;
  features: string[];
  technical: string[];
  imageUrls?: ImageUrl[];
  stockImageUrl?: ImageUrl;
  techs?: ImageUrl[]
  links: Link[];
}


