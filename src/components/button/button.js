import IconLibrary from "../../utils/iconLibrary";
import "./button.css";

// Button component (to be used to add new patient)
// @param object: onClick
const Button = ({ onClick, children, iconName, colour }) => {
  const Icon = iconName ? IconLibrary[iconName] : null;
  const theme = colour ? { backgroundColor: "white", color: "#444444", borderColor: "white", filter: "None", margin: "0" } : {};

  return (
    <button className="button icontext" onClick={onClick} style={theme}>
      {Icon && <Icon />}
      <div className="button__text">{children}</div>
    </button>
  );
};

export default Button;
