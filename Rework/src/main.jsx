import ReactDOM from "react-dom/client";
import { Home } from "./pages/App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Register } from "./pages/register";
import { Navbar } from "./components/navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/register" Component={Register} />
    </Routes>
  </Router>
);
