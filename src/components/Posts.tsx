import React from "react";
import Post from "./Post";
import { getFeatturedPosts } from "@/service/post";

const Posts = async () => {
  const posts = await getFeatturedPosts();
  return (
    <>
      <h2>featured posts</h2>
      <section>
        <Post posts={posts} />
      </section>
    </>
  );
};

export default Posts;
