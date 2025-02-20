import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const Jeong = () => {
  return (
    <>
      <Head>
        <title>Home - HAYOON</title>
        <link rel="icon" href="/images/winter.png" />
      </Head>
      <div className="flex flex-col gap-10 justify-center items-center font-bold text-4xl animate-bounce mt-20">
        <h1>Hello</h1>
        <p>정하윤의 넥스트 js 연습공간</p>
        <button className="animate-spin">
          <Link href="/">
            <Image
              src="/images/winter2.png"
              alt="winter"
              width={100}
              height={100}
            />
          </Link>
        </button>
      </div>
    </>
  );
};

export default Jeong;
