import { getPost } from "@/app/action";
import React from "react";

const postDetails = async ({ params }: any) => {
  const { post: id } = params;
  const data = await getPost(id);
  return (
    <>
      <h1 className="text-3xl">{data.title}</h1>
      <p className="text-2xl">{data.body}</p>
    </>
  );
};

export default postDetails;
