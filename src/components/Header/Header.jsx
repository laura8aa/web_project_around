import vector from "../../../images/vector.png";
import Line from "../../../images/Line.png";

function Header() {
  return (
    <header className="header">
      <img className="header__vector" src={vector} alt="around US" />
      <img className="header__line" src={Line} alt="line" />
    </header>
  );
}

export default Header;
