import "./text.css";

// Text component for styling
// @param props.children
export default Text = (props) => {
  return <div className="text">{props.children}</div>;
};
