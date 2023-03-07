import { useState } from "react";
import "./App.css";
import RenderHistory from "./components/renderHistory";

const CreateForm = () => {
  const [trainingList, setList] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const obj = { data: event.target[0].value, distance: +event.target[1].value };
    const findCoincedance = trainingList.find(el => el.data === obj.data);
    if (findCoincedance) {
      setList([...trainingList].map(el => {
        return el.data === obj.data ? {data: el.data, distance: el.distance + obj.distance} : el;
      }));
    } else {
      setList([...trainingList, obj].sort((a, b) => Date.parse(b.data.split('.').join(' ')) - Date.parse(a.data.split('.').join(' '))));
    }
    event.target.reset();
  };

  const deleteItem = (event) => {
    event.preventDefault();
    const target = event.target.closest('.note').querySelector(".render-date").innerHTML;
    setList([...trainingList].filter(el => el.data !== target));
  }

  const fixItem = (event) => {
    event.preventDefault();
    const targetDate = event.target.closest('.note').querySelector(".render-date").innerHTML;
    const targetDistance = event.target.closest('.note').querySelector(".render-distance").innerHTML;
    console.log(event.target.closest('.form'));
    // event.target.closest('.form').querySelector(".distance").innerHTML = targetDistance;
  }
  
  return (
    <div className="wrapper">
      <form className="form" onSubmit={submit}>
        <label>
          <p>Дата (ГГГГ.ММ.ДД)</p>
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
          <p>Дата (ГГГГ.ММ.ДД)</p>
          <p>Пройдено км</p>
          <p>Действия</p>
        </div>
        <div className="history-container">
          <RenderHistory trainingList={trainingList} deleteItem={deleteItem} fixItem={fixItem} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return <CreateForm />;
}

export default App;
