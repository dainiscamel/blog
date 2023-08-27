import React from "react";
import Link from "next/link";

const Profile = () => {
  return (
    <section>
      <div className="flex flex-col items-center p-2 ">
        <div className="w-60 h-60 ring-1 ring-black bg-white rounded-full flex items-center justify-center ">
          <img
            src="/images/apple.png"
            alt="사과이미지"
            className="w-full h-auto"
          />
        </div>

        <h1>안녕 나는 다인쓰</h1>
        <h3>프론트엔드 개발자지롱</h3>
        <p>이건 프로필 설명</p>
        <Link href="/contact">
          <button className="ring-1 bg-white text-black ring-black p-3 hover:bg-violet-600 hover:text-white focus:outline-none ">
            Contact me!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Profile;
