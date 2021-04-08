import React from "react";
import "./App.css";
import AppCard from "./components/TimeTable";

function App() {
  // const users = [
  //   { name: "Anna", cell: "+14043833639" },
  //   { name: "Maria", cell: "+491771789232" },
  //   { name: "Angelo", cell: "+85264522640" },
  // ];

  const timeTables = [
    { city: "Roma", offset: 2 },
    { city: "Mosca", offset: 2 },
    { city: "Los Angeles", offset: -9 },
  ];
  return (
    <div className="section">
      <div className="columns">
        {timeTables.map((timeTable) => (
          <AppCard city={timeTable.city} offset={timeTable.offset}></AppCard>
        ))}
      </div>
    </div>
  );
}

export default App;
