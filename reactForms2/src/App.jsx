import { useState } from "react";
import "./App.css";
import RenderHistory from "./components/renderHistory";

const CreateForm = () => {
  const [trainingList, setList] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const obj = { data: event.target[0].value, distance: event.target[1].value };
    if (trainingList.find(el => el.data === obj.data)) {
      const change = trainingList.findIndex(el => el.data === obj.data);
      setList([[...trainingList].filter(el => el.data !== obj.data), '?']);
    } else {
      setList([...trainingList, obj].sort((a, b) => Date.parse(b.data.split('.').join(' ')) - Date.parse(a.data.split('.').join(' '))));
    }
    event.target.reset();
  };

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
          <p>Дата (ДД.ММ.ГГ)</p>
          <p>Пройдено км</p>
          <p>Действия</p>
        </div>
        <div className="history-container">
          <RenderHistory trainingList={trainingList} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return <CreateForm />;
}

export default App;
