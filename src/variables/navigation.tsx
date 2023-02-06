import { ReactNode } from "react";
import { IconBusket } from "../components/icons/Icon/IconBusket";
import { IconFavourite } from "../components/icons/Icon/IconFavorite";
import { IconUser } from "../components/icons/Icon/IconUser";

interface ImenuLinks {
  id: number;
  icon: ReactNode;
  link: string;
}

export const menuLinks: ImenuLinks[] = [
  { id: 1, icon: <IconFavourite />, link: "/favorites" },
  { id: 2, icon: <IconBusket />, link: "/basket" },
  { id: 3, icon: <IconUser />, link: "/profile" },
];
