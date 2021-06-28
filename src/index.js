import React from "react";
import ReactDOM from "react-dom";
import Providor, { store } from "./store";

import App from "./App";

ReactDOM.render(
  <Providor store={store}>
    <App />
  </Providor>,
  document.getElementById("root")
);
