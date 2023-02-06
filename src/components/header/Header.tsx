import { Logo } from "../icons/logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { Search } from "../search/Search";
import "./Header.scss";
export function Header() {
  return (
    <div className="container header">
      <Logo />
      <Search />
      <Navigation />
    </div>
  );
}
