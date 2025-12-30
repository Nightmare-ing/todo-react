import React, { useState } from "react";
import ListItem from "./ListItem";

const App = (props) => {
  const LISTS = [
    {
      id: "0",
      content: "DONT",
    },
    {
      id: "1",
      content: "USE",
    },
  ];

  const [lists, setLists] = useState(LISTS);

  return (
    <div>
      <h1>MATT's TO-DOS</h1>
      <ul>
        {lists.map((item) => (
          <li key={item.id}>
            <ListItem id={item.id} content={item.content} />
          </li>
        ))}
      </ul>
      <input type="text" />
      <button>Add to-do!</button>
    </div>
  );
};

export default App;
