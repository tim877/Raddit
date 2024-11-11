export async function getAllUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=0");
  const data = await response.json();

  return data.users;
}
