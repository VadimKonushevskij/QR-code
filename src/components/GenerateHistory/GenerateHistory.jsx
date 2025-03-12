import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../../constants";

import styles from "./generateHistory.module.css";

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li>
          <QRCodeSVG value={item} size={200} bgColor="transparent" />
          {item.includes("http") ? <a href={item}>{item}</a> : <p>{item}</p>}
        </li>
      ))}
    </ul>
  );
};
