import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/register";
import { Registers } from "./pages/register2/Registers";
import { Creatuperfil } from "./pages/Creatuperfil/Creatuperfil";
import { Registersempresa } from "./pages/registerempresa/Registerempresa";
import { Creatuoferta } from "./pages/Creatuoferta/Creatuoferta";
import { Presentacionem } from "./pages/PresentacionEmpleado/PresentacionEm";
import { Perfilempresa } from "./pages/perfilempresa/perfilempresa";
import { Perfilempleado } from "./pages/perfilempleado/perfilempleado";
import { Encuentroempleados } from "./pages/Encuentroempleados/Encuentroempleados";
import { PresentacionEmpresa } from "./pages/PresentacionEmpresa/PresentacionEmpresa";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registers" element={<Registers />} />
      <Route path="/Creatuperfil" element={<Creatuperfil />} />
      <Route path="/registoempresa" element={<Registersempresa />} />
      <Route path="/creatuoferta" element={<Creatuoferta />} />
      <Route path="/Presentacionem" element={<Presentacionem />} />
      <Route path="/perfilempresa" element={<Perfilempresa />} />
      <Route path="/perfilempleado" element={<Perfilempleado />} />
      <Route path="/encuentroempleados" element={<Encuentroempleados />} />
      <Route path="/presentacionEmpresa" element={<PresentacionEmpresa />} />
    </Routes>
  </Router>
);
