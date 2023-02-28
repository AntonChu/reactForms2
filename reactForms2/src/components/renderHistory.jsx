const RenderHistory = (props) => {
  const close = (event) => {
    event.preventDefault();
    console.log(event.target.parentElement.parentElement)
  }

  // const edit = (event) => {

  // }

  return (
    <>
      {props.trainingList.map((item) => {
        return (
          <div className="note" key={item.data}>
            <p>{item.data}</p>
            <p>{item.distance}</p>
            <div className="operation-block">
              <button>edit</button>
              <button onClick={close}>X</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RenderHistory;
