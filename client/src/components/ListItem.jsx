import { useState } from "react";

import "./ListItem.css";

const ListItem = (props) => {
  const [state, setState] = useState(false);

  const deleteItem = (event) => {
    event.preventDefault();
    props.removeItem && props.removeItem(props.id);
  };

  return (
    <li className={state ? "Done" : ""} key={props.id}>
      <label>
        <input
          type="checkbox"
          id={props.id}
          checked={state}
          onChange={(e) => setState(e.target.checked)}
        />
        <span className="ListItem-content">{props.content}</span>
      </label>
      <button onClick={deleteItem}>X</button>
    </li>
  );
};

export default ListItem;
