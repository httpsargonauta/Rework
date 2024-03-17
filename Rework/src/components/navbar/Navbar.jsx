import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import menuIcon from "../../assets/menuh/menuhamburguesa.svg";

export const Navbar = () => {
  return (
    <nav className="flex w-screen -mb-4 justify-between bg-background px-8 py-6 shadow-2xl z-10">
      <div className="flex items-center justify-center">
        <picture>
          <img src="src/assets/Home/ReWork.png" className="aspect-auto w-56" alt="ReWork" />
        </picture>
      </div>
      {/* Mostrar el icono del menú hamburguesa */}
      <div className="sm:hidden">
        <Menu className='w-10' right customBurgerIcon={<img src={menuIcon} alt="Menu hamburguesa" style={{ width: '1.5em', height: '1.5em' }} />} >
          <a href="/" className="menu-item ">Inicio</a>
          <a href="/about" className="menu-item">Servicios</a>
          <a href="/login" className="menu-item">Iniciar Sesión</a>
          <a href="/logout" className="menu-item">Cerrar Sesión</a>
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
