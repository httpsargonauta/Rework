import { slide as Menu } from 'react-burger-menu';
import menuIcon from "../../assets/menuh/menuhamburguesa.svg";
import { useNavigate } from 'react-router-dom';
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
            <p href="/" className="menu-item ">Inicio</p>
            <p href="/about" className="menu-item">Servicios</p>
            <p href="/login" className="menu-item">Iniciar Sesión</p>
            <p href="/logout" className="menu-item">Cerrar Sesión</p>
          </div>
        </Menu>
      </div>
      {/* Mostrar las opciones de menú convencionales en pantallas más grandes */}
      <div className="hidden sm:flex items-center justify-center space-x-12 pr-16">
        <a href="/" className="text-black font-bold		 hover:text-gray-300">Inicio</a>
        <a href="/about" className="text-black font-bold		 hover:text-gray-300">Servicios</a>
        <a href="/login" className="text-black font-bold		 hover:text-gray-300">Iniciar Sesión</a>
        <a href="/logout" className="text-black	font-bold	 hover:text-gray-300">Cerrar Sesión</a>
      </div>
    </nav>
  );
};
