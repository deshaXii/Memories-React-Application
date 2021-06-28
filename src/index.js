import React from "react";
import ReactDOM from "react-dom";
import { providor, store } from "./store";

import App from "./App";

ReactDOM.render(
  <providor store={store}>
    <App />
  </providor>,
  document.getElementById("root")
);
