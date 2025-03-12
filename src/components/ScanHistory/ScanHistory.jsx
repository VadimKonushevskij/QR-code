import { QRCodeSVG } from "qrcode.react";

import { SCAN_DATA } from "../../constants";

import styles from "./scanHistory.module.css";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

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
