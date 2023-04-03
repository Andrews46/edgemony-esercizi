export const stateGlobal = (state, action) => {
  switch (action.type) {
    case "Incrementa":
      return {
        ...state,
        value: state.value + 1,
      };
    case "Decrementa":
      return {
        ...state,
        value: state.value - 1,
      };
  }
};
