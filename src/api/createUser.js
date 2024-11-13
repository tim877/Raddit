import CreatePost from "../components/CreatePost";
// Hämtar inlägg till CREATEPOST från API, när komponenten laddas
  export const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
      const data = await response.json();
      return data.users;
    } catch (error) {
      console.error("Error in fetchUsers:", error);
      throw error;
    }
  };