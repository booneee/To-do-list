import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Information, ListTasks } from "../components/Home/index";
import { addNewTodo, completeTodo, deleteTodo } from "../actions";

let taskId = 0;
var arrayFromStroage = JSON.parse(localStorage.getItem("storedTasks"));
if (arrayFromStroage) {
  taskId = arrayFromStroage.length;
}

export default function Homepage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const taskList = useSelector((state) => state.todo.list);
  const done = false;
  const taskName = (value) => {
    setName(value.target.value);
  };

  const taskDesc = (value) => {
    setDesc(value.target.value);
  };

  const doneTask = (task) => {
    const action = completeTodo(task);
    dispatch(action);
  };

  const deleteTask = (task) => {
    const action = deleteTodo(task);
    dispatch(action);
  };

  function addTask() {
    let tempTaskList = { id: taskId++, name: name, desc: desc, done: done };
    const action = addNewTodo(tempTaskList);
    dispatch(action);
  }

  return (
    <div>
      <h1>My Tools</h1>
      <div className="New-todo">
        <Information name="Name" getInfo={taskName} />
        <Information name="Description" getInfo={taskDesc} />
        <Button newTask={true} addTask={addTask} />
      </div>
      <ListTasks
        taskList={taskList}
        doneTask={doneTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}
