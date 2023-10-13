const Onedata = ({ dataFields, statusHandler, deleteHandler }) => {
  return (
    <>
      <h3>{dataFields.name}</h3>
      <p>Description : {dataFields.description}</p>
      <p>Slot : {dataFields.slot}</p>
      {
        <p>
          Work status :
          {dataFields.completed ? <> Completed</> : <> Not completed</>}
        </p>
      }
      <button onClick={statusHandler}>Change status</button>
      {/*  */}
      <br />
      <button onClick={deleteHandler}>Delete button</button>
    </>
  );
};

export { Onedata };
