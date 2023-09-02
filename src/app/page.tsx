import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Profile />
      {/*@ts-expect-error ServerCompnent */}
      <FeaturedPosts />
      {/*@ts-expect-error ServerCompnent */}
      <CarouselPosts />
    </>
  );
}
