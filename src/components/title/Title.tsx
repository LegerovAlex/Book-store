import { ITitle } from "../../interface/title/title";
import "./Title.scss";

export function Title({ name }: ITitle) {
  return <h1 className="title">{name}</h1>;
}
