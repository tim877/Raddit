export async function getAllPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();

  return data.posts;
}
