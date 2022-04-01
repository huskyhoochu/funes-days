declare type PostCategory = 'dev' | 'journal' | 'algorithm';

declare interface PostNode {
  id: string;
  timeToRead: number;
  html: string;
  tableOfContents: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    category: PostCategory;
  };
}

declare interface PageContext {
  slug: string;
  fullPath: string;
  next: PostNode | null;
  prev: PostNode | null;
}
