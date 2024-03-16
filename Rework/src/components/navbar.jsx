import React from "react";
import menu from '../assets/menuhamburguesa.svg'


export function Navbar ()  {
    return (
      <nav className="flex w-screen -mb-4 justify-between bg-background px-8 py-6 shadow-2xl">
        <div className="flex items-center justify-center">
          <picture>
            <img src="src/assets/Home/ReWork.png"className="aspect-auto w-56" alt="ReWork" />
          </picture>
        </div>
        <div className="flex items-center justify-center">
          <div className="cursor-pointer">
            <img src={menu} alt="Menu hamburguesa cursor-pointer" className="size-16" />
          </div>
        </div>
     </nav>
    )
  }
    