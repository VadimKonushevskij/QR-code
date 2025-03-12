import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>
        Welcome to
        <br />
        QR-code Scanner & Generator
      </h1>
      <h2>
        Click on any of the buttons above to go to the desired functionality
      </h2>
    </div>
  );
};
