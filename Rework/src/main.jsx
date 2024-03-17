import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Registers } from "./pages/register/Registers";
import { Creatuperfil } from "./pages/Creatuperfil/Creatuperfil";
import { Registersempresa } from "./pages/registerempresa/Registerempresa";
import { Creatuoferta } from "./pages/Creatuoferta/Creatuoferta";
import { Presentacionem } from "./pages/PresentacionEmpleado/PresentacionEm";
import { Perfilempresa } from "./pages/perfilempresa/perfilempresa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registers" element={<Registers />} />
      <Route path="/Creatuperfil" element={<Creatuperfil />} />
      <Route path="/registoempresa" element={<Registersempresa />} />
      <Route path="/creatuoferta" element={<Creatuoferta />} />
      <Route path="/Presentacionem" element={<Presentacionem />} />
      <Route path="/perfilempresa" element={<Perfilempresa />} />
    </Routes>
  </Router>
);
