import "./App.css";
import React, {useState, useEffect} from "react";

function App() {

  const [value, setValue] = useState(  localStorage.getItem('value') || '');

  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

  function handleChange(event){
    setValue(event.target.value)
  }

  function save() {
    setValue(value)
    localStorage.setItem('value', value)
    console.log(localStorage.getItem('value'))
  }

  function reset() {
    setValue('')
    localStorage.clear();
    console.log(localStorage.getItem('value'))
  }

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea className="textarea is-large" placeholder="Notes..." value={value} onChange={handleChange} />
          </div>
        </div>
        <p>{value}</p>
        <button className="button is-large is-primary is-active" onClick={save}>Save</button>
        <button className="button is-large" onClick={reset}>Clear</button>
      </div>
    </div>
  );
}

export default App;
