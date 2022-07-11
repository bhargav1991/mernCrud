import React from "react";

function HobbyCheckbox(props) {
  function handleCheckboxChange(id) {
    props.handleCheckBox(id);
  }
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        iid={props.data.id}
        checked={props.data.checked}
        onChange={() => handleCheckboxChange(props.data.id)}
        id={"gridCheck" + props.data.id}
      />
      <label className="form-check-label" htmlFor={"gridCheck" + props.data.id}>
        {props.data.value}
      </label>
    </div>
  );
}

export default HobbyCheckbox;
