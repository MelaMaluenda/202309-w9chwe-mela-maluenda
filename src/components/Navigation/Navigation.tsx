import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="menu">
        <NavLink to={"/aquelarre"}>
          <li className="menu__aquelarre">Avatares</li>
        </NavLink>
        <NavLink to={"/iniciar-sesion"}>
          <li className="menu__iniciar">Iniciar</li>
        </NavLink>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
