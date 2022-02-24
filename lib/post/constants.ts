import { join } from 'path';

export const postsDirectory = join(process.cwd(), 'contents');

export type ContentType = {
  title: string
  date: string
  path: string
  language?: string
};

export type PostType = {
  slug: Array<string>
  title: string
  date: string
  content: string
};
