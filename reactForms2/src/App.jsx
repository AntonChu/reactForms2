import { useState } from "react";
import "./App.css";
import RenderHistory from "./components/renderHistory";
// import submit from "./components/submit";

const CreateForm = () => {
  const [trainList, setList] = useState([]);
  console.log(trainList);

  const submit = (event) => {
    event.preventDefault();
    const obj = { data: event.target[0].value, distance: event.target[0].value };
    setList(prev => {prev.push(obj)});
    event.target.reset();
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={submit}>
        <label>
          <p>Дата (ДД.ММ.ГГ)</p>
          <input className="data" placeholder="дата..."></input>
        </label>
        <label>
          <p>Пройдено км</p>
          <input className="distance" placeholder="пройдено..."></input>
        </label>
        <button className="button">ОК</button>
      </form>
      <div className="history">
        <div className="history-header">
          <p>Дата (ДД.ММ.ГГ)</p>
          <p>Пройдено км</p>
          <p>Действия</p>
        </div>
        <div className="history-container">
          <RenderHistory trainList={trainList} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return <CreateForm />;
}

export default App;
