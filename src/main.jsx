import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

import { Layout } from "./Layout";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
