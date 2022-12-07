import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.title}>
      <h1 className={styles.error404}>Error 404</h1>
      <h3>This route doesn't exist 😥</h3>
      <p>
        You can return to home{" "}
        <button className={styles.goToHome} onClick={() => navigate("/home")}>
          cliking here
        </button>
      </p>
    </div>
  );
};

export default Error;
