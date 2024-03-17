import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import userEmploye from "../../assets/Registro-empresas/area-icon.svg";
import decora from "../../assets/Home/Recurso7.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import senora from "../../assets/publicatuOfertaDeEmpleo/Recurso25.png";
export function Perfilempresa(){
    return(
        <>
         <Navbar />
         <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
         <img className=" absolute -z-20 top-[70%] -left-[150px]" src={garabatoAzul} alt="" />
         <div className="flex justify-center mt-20">
            <div className=" w-[460px] h-auto ">
                <h2>Encuentra ofertas para ti</h2>
                <p className="w-2/5 py-2 bg-[#F2A378] text-center rounded-lg	">trabajos en remoto</p>
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


          <div>
            <div>
                <img className="w-80 mb-10" src={senora} alt="" />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>

            </div>

         </div>
         <Footer />
        </>
    )
}