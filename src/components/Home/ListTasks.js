import React from "react";
import Button from "./Button";
import Tasks from "./Task";

function ListTasks(props) {
  const { taskList, doneTask, deleteTask } = props;
  return (
    <div>
      {taskList.map((item) => (
        <div className="Tasks" key={item.id}>
          <Tasks name={item.name} desc={item.desc} done={item.done} />
          <Button
            index={item.id}
            done={item.done}
            doneTask={doneTask}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </div>
  );
}

export default ListTasks;
