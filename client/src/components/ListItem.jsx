const ListItem = (props) => {
  return (
    <div>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.content}</label>
    </div>
  );
};

export default ListItem;
