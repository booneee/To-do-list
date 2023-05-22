import React from "react";
import { useMutation } from "react-query";

function Button(props) {
  const { newTask, done, doneTask, deleteTask, addTask } = props;
  const doneMutate = useMutation(doneTask);
  const deleteMutate = useMutation(deleteTask);
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
            onClick={() => deleteMutate.mutate(props)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="Incomplete">
          <button
            type="button"
            className="Delete"
            onClick={() => deleteMutate.mutate(props)}
          >
            Delete
          </button>
          <button
            type="button"
            className="Complete"
            onClick={() => doneMutate.mutate(props)}
          >
            Complete
          </button>
        </div>
      )}
    </div>
  );
}

export default Button;
