import { StrictMode } from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./components/App/App.tsx";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
