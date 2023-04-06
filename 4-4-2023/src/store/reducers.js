export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
    case "MODAL_TRUE":
      return {
        ...state,
        isModalVisibile: true,
      };
    case "MODAL_FALSE":
      return {
        ...state,
        isModalVisibile: false,
      };
    case "INPUT_USERNAME":
      return {
        ...state,
        todos: {
          ...state.todos,
          username: action.payload,
        },
      };
    case "INPUT_CONTENT":
      return {
        ...state,
        todos: {
          ...state.todos,
          todo: action.payload,
        },
      };
    case "INPUT_IMAGE":
      return {
        ...state,
        todos: {
          ...state.todos,
          image: action.payload,
        },
      };
    case "INPUT_ID":
      return {
        ...state,
        todos: {
          ...state.todos,
          id: state.tasksListData.length + 1,
        },
      };
  }
};
