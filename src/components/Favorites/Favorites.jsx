import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteCard from "../FavoriteCard/FavoriteCard.jsx";
import FilterOrder from "../FilterOrder/FilterOrder.jsx";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { allCharacters, myFavorites } = useSelector((state) => {
    return state;
  });

  if (allCharacters.length === 0)
    return (
      <div className={styles.title}>
        <h1>You didn't add any character to favorites</h1>
        <p className={styles.errorMsg}>
          You can back to home{" "}
          <Link to={"/home"} className={styles.goToHome}>
            clicking here
          </Link>{" "}
          and add some character
        </p>
      </div>
    );
  else if (myFavorites.length === 0)
    return (
      <>
        <FilterOrder />
        <div className={styles.title}>
          <h1>You haven't any character with this gender</h1>
          <p className={styles.errorMsg}>
            Please try with other type of gender!
          </p>
        </div>
      </>
    );

  return (
    <>
      <FilterOrder />
      <div className={styles.wrapper}>
        {myFavorites?.map((character) => {
          return <FavoriteCard character={character} key={character.id} />;
        })}
      </div>
    </>
  );
};

export default Favorites;
