import React from "react";
import "./App.css";
import List from "./Components/List/List";
import Navbar from "./Components/Navbar/Navbar";
import List1 from "./Components/List/List1";
import List2 from "./Components/List/List2";
import List3 from "./Components/List/List3";
import List4 from "./Components/List/List4";

function App() {
  return (
    <>
      <Navbar />
      <section className="board-details">
        <div className="board-details-list">
          <List />
          <List1 />
          <List2 />
          <List3 />
          <List4 />
        </div>
      </section>
    </>
  );
}

export default App;
