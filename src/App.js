import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  function handelSubmit(event) {
    event.preventDefault();
    // console.log("hello younis");
    // console.log(typeoff count) , is a string an we turn it to a number
    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>Tired if boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handelSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          className=""
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
