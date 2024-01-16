import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { setupStore } from "./store";
import "./translate/i18n";
import ErrorBoundary from "./components/ErrorBoundary";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = setupStore();
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
reportWebVitals();
