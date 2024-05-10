"use server";

export async function getPosts() {
  const res = await fetch(`${process.env.API_URL}`);
  const data = await res.json();
  return data;
}

export async function getPost(id: number) {
  const res = await fetch(`${process.env.API_URL}/${id}`);
  const data = await res.json();
  return data;
}
