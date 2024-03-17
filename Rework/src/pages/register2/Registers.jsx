import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import jobs from "../../assets/Registro-1/Job-icon.svg";
import userEmploye from "../../assets/Registro-empresas/area-icon.svg";
import password from "../../assets/Registro-empleados/candado-icon-registro-empleados.svg"
import decora from "../../assets/Home/Recurso7.png"
import decorama from "../../assets/Home/Recurso8.png"

export function Registers(){

    return(
        
        <>
        <Navbar />

        <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
        <img className=" absolute -z-10 top-[50%] -left-[150px]" src={decorama} alt="" />

        
        <div className="flex flex-col justify-center items-center pt-20 ">
                    <img className="w-80" src={jobs} alt="" />
                    <h1 className="mb-10">¡Bienvenidos!</h1>
                    <button className="mb-10">Encuentra empleos remotos</button>
                    <h2>¡Registrate!</h2>

        
 
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

          <button>Registrate</button>

         
        </form>
      </section>
    

        <Footer />
        </>
    
    )
}
