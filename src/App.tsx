import { useEffect } from "react";
import "./App.css";
import CustomRoutes from "./routes";

function App() {
  useEffect(() => {
    const lng = localStorage.getItem("lng");
    if (!lng) {
      localStorage.setItem("lng", "en");
    }
  }, []);
  return <CustomRoutes />;
}

export default App;
