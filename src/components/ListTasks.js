import React from "react";
import Button from "./Button";
import Tasks from "./Task";

function ListTasks(props) {
  function doneTask(index) {
    console.log("da nhan", index);
    props.doneTask(index);
  }
  function deleteTask(index) {
    console.log("da nhan", index);
    props.deleteTask(index);
  }
  return (
    <div>
      {props.taskList.map((item) => (
        <div className="Tasks">
          <Tasks name={item.name} desc={item.desc} done={item.done} />
          <Button
            index={item.id}
            done={item.done}
            doneTask={doneTask.bind(item.id)}
            deleteTask={deleteTask.bind(item.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ListTasks;
