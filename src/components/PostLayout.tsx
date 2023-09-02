import React from "react";
import { Post } from "@/service/post";
import Card from "./Card";

type Props = {
  posts: Post[];
};

const PostLayout = ({ posts }: Props) => {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </ul>
  );
};

export default PostLayout;
