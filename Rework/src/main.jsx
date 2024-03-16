import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./pages/register";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/register" Component={Register} />
    </Routes>
  </Router>
);
