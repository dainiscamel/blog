import React from "react";
import { Post } from "@/service/post";
import Card from "./Card";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <ul className="flex justify-between">
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </ul>
  );
};

export default PostList;
