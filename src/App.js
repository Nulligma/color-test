import React, { useEffect, useState } from "react";
import "./App.css";
import keyWords from "./data/ColorKeywords";
import HexCodes from "./data/HexCodes";

function App() {
  const [value, setValue] = useState("");
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    keyWords.forEach((e, index) => {
      if (e.findIndex((e) => e === value) !== -1) {
        setCodes(HexCodes[index]);
      }
    });
  }, [value]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const valueTable = () => {
    return (
      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
        }}
      >
        {codes.map((e, index) => (
          <div key={index} style={{ padding: "20px", backgroundColor: `${e}` }}>
            {e}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <p>Color a Word!</p>
      <form onSubmit={onSubmit}>
        <div>
          <input
            value={value}
            onChange={onChange}
            placeholder="Enter color name"
            type="text"
            name="colorvalue"
            required
          />
          <button type="submit">search</button>
          {valueTable()}
        </div>
      </form>
    </div>
  );
}

export default App;
