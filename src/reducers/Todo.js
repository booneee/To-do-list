let storedData = localStorage.getItem("storedTasks");
storedData = JSON.parse(storedData);

const initialState = {
  ...(storedData ? { list: storedData } : { list: [] }),
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      console.log("activate add button");
      const newList = [...state.list];
      newList.push(action.payload);
      localStorage.setItem("storedTasks", JSON.stringify(newList));
      return {
        ...state,
        list: newList,
      };
    }
    case "COMPLETE": {
      let completedTask = action.payload;
      console.log("activate complete button", completedTask);
      // console.log(state.list);
      const newList = [...state.list];
      let id = newList.findIndex((obj) => obj.id === completedTask.index);
      // console.log(id);
      if (id !== -1) {
        newList[id].done = true;
      }
      // console.log(newList);
      localStorage.setItem("storedTasks", JSON.stringify(newList));
      return {
        ...state,
        list: newList,
      };
    }
    case "DELETE": {
      let deletedTask = action.payload;
      console.log("activate delete button", deletedTask);
      // console.log(state.list);
      const newList = [...state.list];
      let id = newList.findIndex((obj) => obj.id === deletedTask.index);
      // console.log(id);
      if (id !== -1) {
        newList.splice(id, 1);
      }
      localStorage.setItem("storedTasks", JSON.stringify(newList));
      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
