import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import CartItem from "./CartItem";
import Button from "./../../UI/Button";

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      {cart.length > 0 ? (
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.pizzaId} />;
          })}
        </ul>
      ) : (
        <p className="py-4 text-center font-medium">
          Please go to{" "}
          <Link to="/menu" className="text-blue-500 underline">
            menu
          </Link>{" "}
          and select items
        </p>
      )}
      <div className="mt-6 space-x-2">
        <Link
          to="/order/new"
          className="inline-block rounded-full bg-yellow-400  px-4 py-3  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none sm:px-6 sm:py-4"
        >
          Order pizzas
        </Link>
        <Button type="delete" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
