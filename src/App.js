import "./App.css";
import React, { useState, useEffect } from "react";
import Card from './card';

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchList() {
    setLoading(true);
    let cardList = await fetch(
      "https://autocomplete.clearbit.com/v1/companies/suggest?query=Apple"
    ).then((res) => res.json());
    setLoading(false);
    setList(cardList);
  }
  console.log(list, "list");
  return (
    <div className="App">
      {loading === false && list.length === 0 ? (
        <button className="button" onClick={fetchList}>Fetch List</button>
      ) : (
        ""
      )}
      {!loading
        ? list.map((item, index) => (
            <Card
              title={item.name}
              logo={item.logo}
              content={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
              }
            />
          ))
        : Array.from({ length: 10 }, () => <Card loading={true} />)}
    </div>
  );
}

export default App;
