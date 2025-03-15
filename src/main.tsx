import { StrictMode } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App.tsx";
import store from "./redux/store.ts";

ReactDom.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root"),
);
