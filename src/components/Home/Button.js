import React from "react";
import { useMutation } from "react-query";

function Button(props) {
  const { newTask, done, doneTask, deleteTask, addTask } = props;
  const doneMutate = useMutation(doneTask);
  const deleteMutate = useMutation(deleteTask);
  return (
    <div className="col-sm-4">
      {newTask ? (
        <button type="button" className="btn btn-primary" onClick={addTask}>
          Add to do
        </button>
      ) : done ? (
        <div className="Completed">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteMutate.mutate(props)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="Incomplete">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => doneMutate.mutate(props)}
          >
            Complete
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteMutate.mutate(props)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Button;
