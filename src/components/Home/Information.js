import React from "react";

function Information(props) {
  return (
    <div className="Section Information">
      <p>{props.name}</p>
      <input
        type="text"
        id={props.name}
        name={props.name}
        onChange={props.getInfo}
      ></input>
    </div>
  );
}

export default Information;
