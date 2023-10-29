const Onedata = ({ dataFields, statusHandler, deleteHandler }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h3 className="card-title">{dataFields.name}</h3>
        <p className="card-text">Description: {dataFields.description}</p>
        {/* <p className="card-text">Slot: {dataFields.slot}</p> */}
        <p className="card-text">
          Work status: {dataFields.completed ? "Completed" : "Not completed"}
        </p>
        <button className="btn btn-primary" onClick={statusHandler}>
          Change status
        </button>
        <button className="btn btn-danger ms-2" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export { Onedata };
