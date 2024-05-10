import Link from "next/link";
import React from "react";
import { getPosts } from "../action";

const posts = async () => {
  const data = await getPosts();
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Link href="/" className="p-4 bg-red-500 rounded-3xl">
        {" "}
        Go To Home
      </Link>
      <h1 className="text-4xl">Posts</h1>
      <ul>
        {data?.map((post: any) => (
          <li key={post.id} className="text-2xl">
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default posts;
