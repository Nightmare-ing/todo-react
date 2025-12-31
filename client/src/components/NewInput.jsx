import { useState } from "react";

const NewInput = (props) => {
  const [inputContent, setInpputContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(inputContent);
    setInpputContent("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputContent}
        onChange={(event) => {
          setInpputContent(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>add to-do!</button>
    </div>
  );
};

export default NewInput;
