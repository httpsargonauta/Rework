import { slide as Menu } from 'react-burger-menu';
import menuIcon from "../../assets/menuh/menuhamburguesa.svg";
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex w-screen -mb-4 justify-between bg-background px-8 py-6 shadow-2xl z-10">
      <div className="flex items-center justify-center cursor-pointer">
        <picture>
          <img src="src/assets/Home/ReWork.png" className="aspect-auto w-56" alt="ReWork" onClick={() => navigate('/')} />
        </picture>
      </div>
      {/* Mostrar el icono del menú hamburguesa */}
      <div className="sm:hidden">
        <Menu className='w-10' right customBurgerIcon={<img src={menuIcon} alt="Menu hamburguesa" className='fixIcon'/>} >
          <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
            <Link to={"/"} className="menu-item ">Inicio</Link>
            <Link to={"/ofertas"} className="menu-item">Ofertas</Link>
            <Link to={"/login"} className="menu-item">Iniciar Sesión</Link>
            <Link to={"/"} className="menu-item">Cerrar Sesión</Link>
          </div>
        </Menu>
      </div>
      {/* Mostrar las opciones de menú convencionales en pantallas más grandes */}
      <div className="hidden sm:flex items-center justify-center space-x-12 pr-16">
            <Link to={"/"} className="ext-black font-bold		 hover:text-gray-300 ">Inicio</Link>
            <Link to={"/ofertas"} className="ext-black font-bold		 hover:text-gray-300">Ofertas</Link>
            <Link to={"/login"} className="ext-black font-bold		 hover:text-gray-300">Iniciar Sesión</Link>
            <Link to={"/"} className="ext-black font-bold		 hover:text-gray-300">Cerrar Sesión</Link>
      </div>
    </nav>
  );
};
