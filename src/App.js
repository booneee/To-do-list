import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Information from "./components/Information";
import ListTasks from "./components/ListTasks";

let taskId = 0;

function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTasklist] = useState([]);
  const taskName = (value) => {
    setName(value.target.value);
  };
  const taskDesc = (value) => {
    setDesc(value.target.value);
  };
  const doneTask = (id) => {
    setTasklist(
      taskList.map((taskList) =>
        taskList.id === id ? { ...taskList, done: true } : taskList
      )
    );
  };
  const deleteTask = (id) => {
    setTasklist(taskList.filter((taskList) => taskList.id !== id));
    console.log("xoa ne", id);
  };
  function addTodo() {
    setTasklist([
      ...taskList,
      { id: taskId++, name: name, desc: desc, done: false },
    ]);
  }
  return (
    <div className="App">
      <h1>My Tools</h1>
      <div className="New-todo">
        <Information name="Name" getInfo={taskName} />
        <Information name="Description" getInfo={taskDesc} />
        <Button new={true} onCLick={addTodo} />
      </div>
      <ListTasks
        taskList={taskList}
        doneTask={doneTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
