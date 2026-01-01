import { useState } from "react";

import "./ListItem.css";

const ListItem = (props) => {
  const [state, setState] = useState(false);

  const deleteItem = (event) => {
    event.preventDefault();
    props.removeItem && props.removeItem(props.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={props.id}
          checked={state}
          onChange={(e) => setState(e.target.checked)}
        />
        <span className={"listItem " + (state ? "done" : "")}>
          {props.content}
        </span>
      </label>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default ListItem;
