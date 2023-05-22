import React from "react";

function Tasks(props) {
  return (
    <div className="Section Informaiton">
      {props.done ? (
        <div className="Todo">
          <p className="Done Name">{props.name}</p>
          <p className="Done Description">{props.desc}</p>
        </div>
      ) : (
        <div className="Todo">
          <p className="Ongoing Name">{props.name}</p>
          <p className="Ongoing Description">{props.desc}</p>
        </div>
      )}
    </div>
  );
}

export default Tasks;
