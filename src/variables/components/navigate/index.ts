interface INavItem {
  id: number;
  title: string;
  to: string;
  icon: string;
}

export const navItems: INavItem[] = [
  { id: 1, title: "Favorites", icon: "favorites", to: "/favorites" },
  { id: 2, title: "basket", icon: "basket", to: "/basket" },
  { id: 3, title: "Profile", icon: "Profile", to: "/Profile" },
];
