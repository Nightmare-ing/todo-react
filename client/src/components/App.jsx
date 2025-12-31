import React, { useId, useState } from "react";
import ListItem from "./ListItem";
import NewInput from "./NewInput";

const App = (props) => {
  const LISTS = [
    {
      id: "random id 0",
      content: "DONT",
      checked: true,
    },
    {
      id: "random id 1",
      content: "USE",
      checked: false,
    },
  ];

  const [lists, setLists] = useState(LISTS);

  const addItem = (newContent) => {
    setLists(
      lists.concat([
        {
          id: "random id " + lists.length,
          content: newContent,
          checked: false,
        },
      ])
    );
  };

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
      <NewInput onSubmit={addItem} />
    </div>
  );
};

export default App;
