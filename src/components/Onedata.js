import React from "react";

const Onedata = ({ dataFields, statusHandler, deleteHandler }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="flex-fill">
        <h3>{dataFields.name}</h3>
        <p>Description: {dataFields.description}</p>
        <p>
          Work status: {dataFields.completed ? "Completed" : "Not completed"}
        </p>
      </div>
      <div>
        <button className="btn btn-primary" onClick={statusHandler}>
          Change Status
        </button>
        <button className="btn btn-danger ms-2" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export { Onedata };
