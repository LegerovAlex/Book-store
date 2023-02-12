import { IconBack } from "../icons/Icon/IconBack";
import { Link } from "react-router-dom";
import "./Payment.scss";

export function Payment() {
  return (
    <div className="container payment-container">
      <Link to={`/`}>
        <IconBack />
      </Link>
      <div>Thank you for shopping</div>
    </div>
  );
}
