import React from "react";

function Button(props) {
  const { newTask, done, doneTask, deleteTask, addTask } = props;
  return (
    <div className="Section Buttons">
      {newTask ? (
        <button type="button" onClick={addTask} id="Newtask">
          Add to do
        </button>
      ) : done ? (
        <div className="Completed">
          <button
            type="button"
            className="Delete"
            onClick={() => deleteTask(props)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="Incomplete">
          <button
            type="button"
            className="Delete"
            onClick={() => deleteTask(props)}
          >
            Delete
          </button>
          <button
            type="button"
            className="Complete"
            onClick={() => doneTask(props)}
          >
            Complete
          </button>
        </div>
      )}
    </div>
  );
}

export default Button;
