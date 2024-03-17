import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import userEmploye from "../../assets/Registro-empresas/area-icon.svg";
import decora from "../../assets/Home/Recurso7.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import senora from "../../assets/publicatuOfertaDeEmpleo/Recurso25.png";
export function Perfilempresa() {
  return (
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
            <div className="flex flex-row items-center gap-4 shadow-gray-600">
              <img className="w-40 mb-10" src={senora} alt="" />
              <div>
                <h2>Diseñador grafico creativo</h2>
                <h3>nombre de la empresa</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className="flex">
                  <p className="w-2/5 py-2 bg-[#F2A378] text-center rounded-lg	">Adove</p>
                  <p className="w-2/5 py-2 bg-[#F2A378] text-center rounded-lg	">Adove</p>
                  <p className="w-2/5 py-2 bg-[#F2A378] text-center rounded-lg	">Adove</p>
                </div>
              </div>
              <div>
                <h2> <p className="w-2/5 py-2 bg-[#F2A378] text-center rounded-lg	">2.000$</p></h2>
                <p>Oferta Activa:</p>
                <p>Quedan 2 horas </p>
                <p>Hora: 2pm 3pm</p>
              </div>
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