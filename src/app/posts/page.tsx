import Category from "@/components/Category";
import FilteredPosts from "@/components/FilteredPosts";
import { getPosts } from "@/service/post";
import React from "react";

const PostPage = async () => {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilteredPosts posts={posts} categories={categories} />;
};

export default PostPage;
