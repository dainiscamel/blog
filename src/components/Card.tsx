import React from "react";
import { Post } from "@/service/post";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post;
};
const Card = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.path}`}>
      <div>
        <Image
          src={`/images/${post.path}.png`}
          alt={post.id}
          width={300}
          height={200}
        />
        <time>{post.date.toString()}</time>
        <h3 key={post.id}>{post.title}</h3>
        <p>{post.description}</p>
        <span>{post.category}</span>
      </div>
    </Link>
  );
};

export default Card;
