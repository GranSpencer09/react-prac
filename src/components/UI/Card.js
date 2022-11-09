import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
// the props.children pulls in the content between the <Card></Card> tags in ExpensesItem.js

export default Card;
