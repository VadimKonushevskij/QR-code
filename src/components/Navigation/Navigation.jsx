import { Link, NavLink } from "react-router";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.container}>
      <Link className={style.link} to="/">
        Home
      </Link>
      <Link className={style.link} to="/generator">
        QR-code generator
      </Link>
      <Link className={style.link} to="/scanner">
        QR-code scanner
      </Link>
      <Link className={style.link} to="/generateHistory">
        Generate history
      </Link>
      <Link className={style.link} to="/scanHistory">
        Scan history
      </Link>
    </nav>
  );
};
