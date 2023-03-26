import React from "react";

function Button(props) {
  function doneIndex() {
    props.doneTask(props.index);
    console.log("da gui", props.index);
  }
  function deleteIndex() {
    props.deleteTask(props.index);
    console.log("da gui", props.index);
  }
  return (
    <div className="Section Buttons">
      {props.new ? (
        <button type="button" onClick={props.onCLick} id="Newtask">
          Add to do
        </button>
      ) : props.done ? (
        <div className="Completed">
          <button
            type="button"
            className="Delete"
            onClick={deleteIndex.bind(props.index)}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="Incomplete">
          <button
            type="button"
            className="Delete"
            onClick={deleteIndex.bind(props.index)}
          >
            Delete
          </button>
          <button
            type="button"
            className="Complete"
            onClick={doneIndex.bind(props.index)}
          >
            Complete
          </button>
        </div>
      )}
    </div>
  );
}

export default Button;
