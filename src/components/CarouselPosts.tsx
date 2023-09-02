import { getNotFeaturedPosts, getFeaturedPosts } from "@/service/post";
import React from "react";
import MultiCarousel from "./MultiCarousel";
import Card from "./Card";

const CarouselPosts = async () => {
  const posts = await getFeaturedPosts();
  console.log(posts);
  return (
    <>
      <section>
        <h2>You may Like</h2>
        <MultiCarousel>
          {posts?.map((post) => (
            <Card post={post} />
          ))}
        </MultiCarousel>
      </section>
    </>
  );
};

export default CarouselPosts;
