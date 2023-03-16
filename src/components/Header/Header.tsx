// CSS
import "./Header.css";

// Imports
import { Switch, Route, Link, useLocation } from "react-router-dom";

// Context
//import { translations } from "../../contexts/TranslationContext";
//import { TranslationContext } from "../../contexts/TranslationContext";

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const translation = useContext(TranslationContext);
  const headerClassName = `header ${
    pathname === "/"
      ? "header_main"
      : ""
  }`;

  return (
    <header className={headerClassName}>
      <Link to="/">
        <img
          src={logo}
          alt="Логотип KZCALC"
          className="header__logo"
        />
      </Link>
      <Switch>
        {!loggedIn ? (
          <Navigation />
        ) : (
          <NavTab />
        )}
      </Switch>
    </header>
  );
}

export default Header;
