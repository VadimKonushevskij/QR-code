import { QrCodeGenerator } from "./components/Generation/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scanning/QrCodeScanner";
import { Navigation } from "./components/Navigation/Navigation";
import { HomePage } from "./components/HomePage/HomePage";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory/ScanHistory";

import { Routes, Route } from "react-router";

const Layout = () => {
  return (
    <>
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/QR-code/generator" element={<QrCodeGenerator />} />
        <Route path="/QR-code/scanner" element={<QrCodeScanner />} />
        <Route path="/QR-code/generateHistory" element={<GenerateHistory />} />
        <Route path="/QR-code/scanHistory" element={<ScanHistory />} />
      </Routes>
    </>
  );
};

export { Layout };
