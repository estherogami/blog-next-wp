export interface Post {
    id: number;
    title: Render;
    excerpt: Render;
    date: string;
    slug: string;
    thumbnailUrl: string;
  }
  
export interface Render {
  rendered: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
  
export interface PostListProps {
    posts: Post;
  }