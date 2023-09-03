"use client";
import React, { useState } from "react";
import Category from "./Category";
import PostLayout from "./PostLayout";
import { Post } from "@/service/post";

type Props = {
  posts: Post[];
  categories: string[];
};

const FilteredPosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState("ALL POSTS");

  const filtered =
    selected === "ALL POSTS"
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <div className="flex justify-between">
      <PostLayout posts={filtered} />
      <Category
        categories={["ALL POSTS", ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </div>
  );
};

export default FilteredPosts;
