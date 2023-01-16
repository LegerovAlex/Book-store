import { Logo } from "../icons/logo/Logo";
import { Navigation } from "../icons/nav-icons/Navigation";
import { Search } from "../search/Search";
import "./Header.scss";
export function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
      <Navigation />
    </div>
  );
}
