import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import Information from "./components/Information";
import ListTasks from "./components/ListTasks";

let taskId = 0;

function App() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTasklist] = useState([]);
  useEffect(() => {
    let storedData = localStorage.getItem("storedTasks");
    storedData = JSON.parse(storedData);
    if (storedData) {
      setTasklist(storedData);
    }
  }, []);
  const taskName = (value) => {
    setName(value.target.value);
  };
  const taskDesc = (value) => {
    setDesc(value.target.value);
  };
  const doneTask = (id) => {
    let tempTaskList = taskList.map((taskList) =>
      taskList.id === id ? { ...taskList, done: true } : taskList
    );
    setTasklist(tempTaskList);
    localStorage.setItem(
      "storedTasks",
      JSON.stringify(taskList.filter((taskList) => taskList.id !== id))
    );
    localStorage.setItem("storedTasks", JSON.stringify(tempTaskList));
  };
  const deleteTask = (id) => {
    let tempTaskList = taskList.filter((taskList) => taskList.id !== id);
    setTasklist(tempTaskList);
    console.log(id, taskId);
    localStorage.setItem("storedTasks", JSON.stringify(tempTaskList));
  };
  function addTodo() {
    let tempTaskList = [
      ...taskList,
      { id: taskId++, name: name, desc: desc, done: false },
    ];
    setTasklist(tempTaskList);
    localStorage.setItem("storedTasks", JSON.stringify(tempTaskList));
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
