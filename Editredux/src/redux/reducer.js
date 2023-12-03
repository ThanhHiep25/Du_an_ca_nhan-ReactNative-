const initialState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Play Game" },
    { id: 2, name: "Learn React" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, { id: 3, name: "Play Game" }],
      };

    default:
      return state;
  }
};

export default rootReducer;
