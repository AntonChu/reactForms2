const RenderHistory = ({trainingList, deleteItem, fixItem}) => {

  return (
    <>
      {trainingList.map((item) => {
        return (
          <div className="note" key={item.data}>
            <p className="render-date">{item.data}</p>
            <p className="render-distance">{item.distance}</p>
            <div className="operation-block">
              <button onClick={fixItem}>edit</button>
              <button onClick={deleteItem}>X</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RenderHistory;
