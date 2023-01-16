interface ImenuLinks {
  id: number;
  icon: string;
  link: string;
}

export const menuLinks: ImenuLinks[] = [
  { id: 1, icon: "favorite", link: "/favorites" },
  { id: 2, icon: "basket", link: "/basket" },
  { id: 3, icon: "profile", link: "/profile" },
];
