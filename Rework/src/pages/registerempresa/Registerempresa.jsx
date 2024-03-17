import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import senora from "../../assets/Registro-empresas/Imagendemujer-icon.png";
import userEmploye from "../../assets/Registro-empresas/area-icon.svg";
import password from "../../assets/Registro-empleados/candado-icon-registro-empleados.svg"

import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"

export function Registersempresa(){

    return(
        
        <>
        <Navbar />

         <img className=" absolute -z-20 top-[70%] -left-[150px]" src={garabatoAzul} alt="" />

        
        <div className="flex flex-col justify-center items-center pt-20 ">
                    <img className="w-80" src={senora} alt="" />
                    <h1 className="mb-10">¡Bienvenidos!</h1>
                    <button className="mb-10 bg-[#75C5C3]">Encuentra tus profesionales</button>
                    <h2>¡Registrate tu empresa!</h2>

        
 
        </div>

        <section className="mt-12 flex flex-col items-center gap-4">
        <form
          className="flex flex-col gap-4"
         
        >
          <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor="email">
              <img
                src={userEmploye}
                alt=""
                className="size-8"
              />
            </label>
            <input
              type="email"
              placeholder="User or Email"
              className="bg-transparent focus:outline-none text-md font-semibold text-tertiary text-start items-center justify-center"
            />
          </div>

          <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor="email">
              <img
                src={password}
                alt=""
                className="size-8"
              />
            </label>
 
          </div>
          <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor="email">
              <img
                src={password}
                alt=""
                className="size-8"
              />
            </label>
 
          </div>
          <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor="email">
              <img
                src={password}
                alt=""
                className="size-8"
              />
            </label>
 
          </div>

          <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label htmlFor="email">
              <img
                src={password}
                alt=""
                className="size-8"
              />
            </label>
 
          </div>

          <button className="bg-[#75C5C3]" >Registrate</button>

         
        </form>
      </section>
    

        <Footer />
        </>
    
    )
}