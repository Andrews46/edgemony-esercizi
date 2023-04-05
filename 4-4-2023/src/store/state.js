export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      image: "https://robohash.org/superman",
      username: "Superman",
    },
    {
      id: 2,
      todo: "Memorize the fifty states and their capitals",
      completed: false,
      image: "https://robohash.org/hulk",
      username: "Hulk",
    },
    {
      id: 3,
      todo: "Watch a classic movie",
      completed: false,
      image: "https://robohash.org/flash",
      username: "Flash",
    },
    {
      id: 4,
      todo: "Contribute code or a monetary donation to an open-source software project",
      completed: false,
      image: "https://robohash.org/ken",
      username: "Ken",
    },
  ],
  isModalVisibile: false,
  todos: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },
};
