import Posts from "@/components/Posts";
import Profile from "@/components/Profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Profile />
      {/*@ts-expect-error ServerCompnent */}
      <Posts />
    </>
  );
}
