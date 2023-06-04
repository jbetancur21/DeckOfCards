import { Outlet } from "react-router-dom";

const Header = () => {
  return (

    <header className="header">
      <h1 className="header-title">Deck of Cards</h1>
      <Outlet/>
    </header>
  );
};

export default Header;
