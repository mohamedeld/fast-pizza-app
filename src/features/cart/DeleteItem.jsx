import Button from "./../../UI/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="delete" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
