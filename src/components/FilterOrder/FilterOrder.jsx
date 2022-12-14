import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import styles from "./FilterOrder.module.css";

const FilterOrder = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Order") dispatch(orderCards(value));

    if (name === "Filter") dispatch(filterCards(value));
  };

  return (
    <div className={styles.wrapper}>
      <select name="Order" onChange={handleChange} className={styles.select}>
        <option value="Upward">Upward</option>
        <option value="Falling">Falling</option>
      </select>

      <select name="Filter" onChange={handleChange} className={styles.select}>
        <option value="All">Show all</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};

export default FilterOrder;
