export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorAvatar: string;
  publishedDate: string; // human readable (kept for display)
  publishedISO?: string; // ISO date for sorting/SEO (e.g. "2023-10-24")
  tags: string[];
  imageUrl: string;
  readTimeInMinutes: number;
  featured?: boolean;
  slug: string; // SEO-friendly URL segment, e.g. "how-to-invest"
}

// Export View type so components can import it as a type-only import
export type View =
  | 'home'
  | 'post'
  | 'about'
  | 'contact'
  | 'search'
  | 'blog'
  | 'disclaimer'
  | 'privacy'
  | 'terms'
  | '404';