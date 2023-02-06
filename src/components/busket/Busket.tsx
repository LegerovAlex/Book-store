import { IconBack } from "../icons/Icon/IconBack";
import { Title } from "../title/Title";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import {
  deleteItem,
  incrementQuantity,
  removeItem,
} from "../../store/book-slice";
import { decrementQuantity } from "../../store/book-slice";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import "./Busket.scss";

export function Busket() {
  const dispatch = useAppDispatch();
  const busket = useAppSelector((state) => state.books.busket);

  const getTotal = () => {
    let totalPrice = 0;
    busket.forEach((item) => {
      totalPrice += Number(item.price.replace("$", "")) * item.quantity;
    });
    return { totalPrice };
  };

  return (
    <div className="container busket">
      <Link to={`/`}>
        <IconBack />
      </Link>
      <Title name={"Your cart"} />
      {busket.length ? (
        <>
          {busket.map((book) => (
            <div key={book.isbn13} className="busket-list">
              <div className="busket-list-inner">
                <div className="busket-list-img">
                  <img src={book.image} alt="" />
                </div>
                <div>
                  <h3 className="busket-list__title">{book.title}</h3>
                  <div className="busket-list-icons">
                    <AiOutlineMinus
                      onClick={() =>
                        dispatch(decrementQuantity({ isbn13: book.isbn13 }))
                      }
                    />
                    <div>{book.quantity}</div>
                    <BsPlus
                      onClick={() =>
                        dispatch(incrementQuantity({ isbn13: book.isbn13 }))
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="busket-list-price">
                <div>
                  ${Number(book.price.replace("$", "")) * book.quantity}
                </div>
                <AiOutlineClose
                  onClick={() => dispatch(removeItem({ isbn13: book.isbn13 }))}
                />
              </div>
            </div>
          ))}
          <div className="busket-list-price__total">
            <div> TOTAL: ${getTotal().totalPrice} </div>
            <Link to={`/payment`}>
              <button onClick={() => dispatch(deleteItem())}>CHECK OUT</button>
            </Link>
          </div>
        </>
      ) : (
        <div>Cart is Empty </div>
      )}
    </div>
  );
}
