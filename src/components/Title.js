import "./title.css";

const Title = (props) => {
  return <h1 className={props.color}>{props.content}</h1>;
};

export default Title;
