import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/register";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/register" Component={Register} />
    </Routes>
  </Router>
);
