const Onedata = ({ dataFields, statusHandler }) => {
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
    </>
  );
};

export { Onedata };
