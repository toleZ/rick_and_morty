import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ character, onClose }) {
  const { name, species, gender, image, status, location, id } = character;

  return (
    <div className={styles.card}>
      <button onClick={() => onClose(name)} className={styles.closeBtn}>
        ❌
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
}
