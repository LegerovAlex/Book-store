import { useAppSelector } from "../../../store/store";
import "../Icon/Icon.scss";

export function IconBusket() {
  const busket = useAppSelector((state) => state.books.busket);
  return (
    <div className="svg">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.1 1L1 17.3929C1 17.8191 1.15979 18.2279 1.44422 18.5293C1.72865 18.8307 2.11442 19 2.51667 19H17.4833C17.8856 19 18.2713 18.8307 18.5558 18.5293C18.8402 18.2279 19 17.8191 19 17.3929L16.9 1H3.1Z"
          stroke="#313037"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 7C13 7.53043 12.6839 8.03914 12.1213 8.41421C11.5587 8.78929 10.7956 9 10 9C9.20435 9 8.44129 8.78929 7.87868 8.41421C7.31607 8.03914 7 7.53043 7 7"
          stroke="#313037"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {Boolean(busket.length) && <span className="svg-active"></span>}
    </div>
  );
}
