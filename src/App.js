import React, { useState } from "react";
import Cross from "./Cross";
import data from "./data";
import "./styles.css";

function App() {
  const [value, setValue] = useState('')


  const hendleSearch = data.filter((item)=> {
 return item.name.toLowerCase().includes(value.toLowerCase())
})

  //

  return (
    <div className="divBody">
      <div className="divInput">
        <input className="inp" type="text" onChange={(event)=> setValue(event.target.value)} />
      </div>

      <div className="divCards">
        {hendleSearch.map((item) => {
          return <Cross img={item.img} name={item.name} price={item.price} />;
        })}
      </div>
    </div>
  );
}

export default App;
