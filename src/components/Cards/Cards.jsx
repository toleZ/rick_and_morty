import Card from "../Card/Card";
import styles from "./Cards.module.css";
import Spinner from "../Spinner/Spinner";

export default function Cards({ characters, onClose, randomCharacter }) {
  if (!characters) return <Spinner />;

  if (characters.length === 0)
    return (
      <div className={styles.title}>
        <h1>
          <span className={styles.ops}>Oops...</span> you deleted all the
          characters 😵
        </h1>
        <h3>
          You can add a character from the search bar typing the character ID
        </h3>
        <p>
          Or can{" "}
          <button className={styles.randomBtn} onClick={randomCharacter}>
            click here
          </button>{" "}
          and add random character
        </p>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      {characters.map((character) => (
        <Card key={character.name} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
