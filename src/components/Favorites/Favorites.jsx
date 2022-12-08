import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => {
    return state;
  });

  if (myFavorites.length === 0)
    return (
      <div className={styles.title}>
        <h1>You didn't add any character to favorites</h1>
        <p>
          You can back to home{" "}
          <Link to={"/home"} className={styles.goToHome}>
            clicking here
          </Link>{" "}
          and add some character
        </p>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      {myFavorites?.map((character) => {
        return <FavoriteCard character={character} key={character.id} />;
      })}
    </div>
  );
};

export default Favorites;
