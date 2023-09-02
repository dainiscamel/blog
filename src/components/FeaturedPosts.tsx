import React from "react";
import PostLayout from "./PostLayout";
import { getFeaturedPosts } from "@/service/post";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();
  return (
    <>
      <h2>featured posts</h2>
      <section>
        <PostLayout posts={posts} />
      </section>
    </>
  );
};

export default FeaturedPosts;
