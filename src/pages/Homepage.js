import React from "react";
import { useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Information, ListTasks } from "../components/Home/index";
import { addNewTodo, completeTodo, deleteTodo } from "../actions";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../query";

let taskId = 0;
var storageTask = JSON.parse(localStorage.getItem("storedTasks"));
if (storageTask) {
  taskId = storageTask.length;
}

export default function Homepage() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const taskList = useSelector((state) => state.todo.list);
  const done = false;

  function getTodos() {
    return taskList;
  }

  const { isLoading, isError, error } = useQuery("todos", getTodos);

  if (isLoading) console.log("loading ... ");

  if (isError) console.log({ error });

  const taskName = (value) => {
    setName(value.target.value);
  };

  const taskDesc = (value) => {
    setDesc(value.target.value);
  };

  function doneMutation(task) {
    const action = completeTodo(task);
    dispatch(action);
  }

  function deleteMutation(task) {
    const action = deleteTodo(task);
    dispatch(action);
  }

  function addMutation() {
    let tempTaskList = { id: taskId++, name: name, desc: desc, done: done };
    const action = addNewTodo(tempTaskList);
    dispatch(action);
  }

  const addTask = useMutation(addMutation, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    onError: () => {
      console.log("error");
    },
  });

  return (
    <div>
      <h1>My Tools</h1>
      <div className="New-todo">
        <Information name="Name" getInfo={taskName} />
        <Information name="Description" getInfo={taskDesc} />
        <Button newTask={true} addTask={() => addTask.mutate()} />
      </div>
      <ListTasks
        taskList={taskList}
        doneTask={doneMutation}
        deleteTask={deleteMutation}
      />
    </div>
  );
}
