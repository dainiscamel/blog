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
      <article className=" bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          src={`/images/${post.path}.png`}
          alt={post.id}
          className="w-full"
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-5">
          <time className="self-end">{post.date.toString()}</time>
          <h3 className="font-bold" key={post.id}>
            {post.title}
          </h3>
          <p>{post.description}</p>
          <span className="text-sm rounded-lg bg-sky-200 px-2 my-2">
            {post.category}
          </span>
        </div>
      </article>
    </Link>
  );
};

export default Card;
