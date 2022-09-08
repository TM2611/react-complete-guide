import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //Value of props.children (built-in property) is the content between the opening and closing tags of a custom component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
