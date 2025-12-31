import { useState } from "react";

import "./ListItem.css";

const ListItem = (props) => {
  const [state, setState] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={props.id}
          checked={state}
          onChange={(e) => setState(e.target.checked)}
        />
        <span className={state ? "done" : ""}>{props.content}</span>
      </label>
    </div>
  );
};

export default ListItem;
