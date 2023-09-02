import path from "path";
import { promises as fs } from "fs";

export type Post = {
  id: string;
  title: string;
  description: string;
  category: string;
  date: Date;
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  const data = posts.filter((post) => {
    if (post.featured === true) return post;
  });
  return data;
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts().then((posts) =>
    posts.filter((post) => !post.featured)
  );

  return posts;
}

export async function getPost(id: string): Promise<Post | undefined> {
  const posts = await getPosts();
  const data = posts.find((post) => {
    if (post.id === id) return post;
  });
  return data;
}
