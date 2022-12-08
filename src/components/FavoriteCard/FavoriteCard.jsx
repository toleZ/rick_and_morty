import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./FavoriteCard.module.css";

const FavoriteCard = ({ character }) => {
  const { name, species, gender, image, status, location, id } = character;
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(deleteFavorite(character.id));
  };

  return (
    <div className={styles.card}>
      <button onClick={handleFavorite} className={styles.favBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.favIcon}
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
        </svg>
      </button>
      <img src={image} alt={name} />

      <section className={styles.info}>
        <Link to={`/detail/${id}`} className={styles.cardLink}>
          <h2 className={styles.cardTitle}>{name}</h2>
        </Link>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={
              status === "Alive" ? "green" : status === "Dead" ? "red" : "gray"
            }
            style={{ width: ".6rem", marginRight: ".5rem" }}
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
          </svg>
          {status} - {species}
        </span>
        <span>
          <h4>Gender:</h4>
          <p>{gender}</p>
        </span>

        <span>
          <h4>Last known location:</h4>
          <p>{location.name}</p>
        </span>
      </section>
    </div>
  );
};

export default FavoriteCard;
