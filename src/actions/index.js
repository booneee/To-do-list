export const addNewTodo = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const completeTodo = (task) => {
  return {
    type: "COMPLETE",
    payload: task,
  };
};

export const deleteTodo = (task) => {
  return {
    type: "DELETE",
    payload: task,
  };
};
