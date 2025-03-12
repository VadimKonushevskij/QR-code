import { Link, NavLink } from "react-router";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.container}>
      <Link className={style.link} to="/">
        Home
      </Link>
      <Link className={style.link} to="/QR-code/generator">
        QR-code generator
      </Link>
      <Link className={style.link} to="/QR-code/scanner">
        QR-code scanner
      </Link>
      <Link className={style.link} to="/QR-code/generateHistory">
        Generate history
      </Link>
      <Link className={style.link} to="/QR-code/scanHistory">
        Scan history
      </Link>
    </nav>
  );
};
