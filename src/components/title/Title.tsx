import "./Title.scss";

interface ITitle {
  name: string;
}

export function Title({ name }: ITitle) {
  return <h1 className="title">{name}</h1>;
}
