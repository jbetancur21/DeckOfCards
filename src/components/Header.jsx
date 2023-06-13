import { Outlet } from "react-router-dom";
import styles from "../estilos/Header.css";
const Header = () => {
  return (
    <header className="HeaderCss">
      <h1 className="header-title">Deck of Cards</h1>
      <Outlet />
    </header>
  );
};

export default Header;
