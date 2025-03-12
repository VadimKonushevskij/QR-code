import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import styles from "./qrCodeScanner.module.css";

import { SCAN_DATA } from "../../constants";

export const QrCodeScanner = () => {
  const [scanValue, setScanValue] = useState("Scan some QR-code");
  const scannerSettings = {
    audio: false,
    finder: false,
  };

  const scannerStyles = {
    container: {
      width: 500,
      height: 500,
      paddingTop: 50,
    },
  };

  const onScanHandler = (result) => {
    setScanValue(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    if (prevData.includes(result[0].rawValue)) {
      alert(
        "This QR-code has already been scanned! Look at the 'Scan history' tab."
      );
      return;
    }
    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div className={styles.container}>
      <Scanner
        className="scanner"
        components={scannerSettings}
        styles={scannerStyles}
        onScan={onScanHandler}
      />
      {scanValue.includes("http") ? (
        <a href={scanValue}>{scanValue}</a>
      ) : (
        <p>{scanValue}</p>
      )}
    </div>
  );
};
