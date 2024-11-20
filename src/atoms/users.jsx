import { atom } from "recoil";


export const usersState = atom({
    key: "users",
    default: []
});

// // initiala värdet är en tom array
// const [users, setUsers] = useRecoilState(usersState);

// // nya värdet är api datan som hämtas från DummyJSON
// useEffect(() => {
//   getAllUsers().then(setUsers);
// }, [])


// export const usernamesSelector = selector({
//     key: "usernames",
//     get: ({ get }) => {
//       const usernames = get(users);
//       // filtrera api arrayen
//       return usernames.filter((username) => username.username);
//     },
// });



