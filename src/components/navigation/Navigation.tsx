import { menuLinks } from "../../variables/navigation";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export function Navigation() {
  return (
    <div className="menu">
      <ul className="menu-list">
        {menuLinks.map((menu) => {
          return (
            <li key={menu.id}>
              <Link to={menu.link}>{menu.icon}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
