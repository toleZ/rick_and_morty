import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import styles from "./Detail.module.css";

const Detail = () => {
  const { detailid } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailid}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log(error));

    return () => setCharacter({});
  }, [detailid]);

  if (!character) return <Spinner />;

  return (
    <div className={styles.card}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.cardImage}
      />

      <div className={styles.cardInfo}>
        <h1>{character.name}</h1>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={
              character.status === "Alive"
                ? "green"
                : character.status === "Dead"
                ? "red"
                : "gray"
            }
            style={{ width: ".6rem", marginRight: ".5rem" }}
          >
            <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" />
          </svg>
          {character.status}
        </span>

        <span>
          <h4 className={styles.infoTitle}>Specie - Gender</h4>
          {character.species} - {character.gender}
        </span>

        <span>
          <h4 className={styles.infoTitle}>Origin</h4>
          {character.origin.name}
        </span>
      </div>
    </div>
  );
};

export default Detail;
