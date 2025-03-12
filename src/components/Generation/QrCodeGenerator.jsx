import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { GENERATE_DATA } from "../../constants";

import styles from "./qrCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalValueForQrCode, setFinalValueForQrCode] = useState("");

  const onGenerateBtnClickHandler = () => {
    if (!inputValue) return;
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    if (prevData.includes(inputValue)) {
      alert(
        "For this text the QR-code has already been generated! Look at the 'Generate history' tab."
      );
      return;
    }
    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, inputValue])
    );
    setFinalValueForQrCode(inputValue);
    setInputValue("");
  };

  const onInputChangeHandler = (event) => {
    setInputValue(event.target.value);
    setFinalValueForQrCode("");
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="Input your text..."
        type="text"
        value={inputValue}
        onChange={onInputChangeHandler}
      ></input>
      <button type="button" onClick={onGenerateBtnClickHandler}>
        Generate QR-code!
      </button>
      {finalValueForQrCode && (
        <QRCodeSVG
          value={finalValueForQrCode}
          size={500}
          bgColor="transparent"
        />
      )}
    </div>
  );
};
