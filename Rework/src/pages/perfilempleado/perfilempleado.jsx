import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import userEmploye from "../../assets/Registro-empresas/area-icon.svg";
import decora from "../../assets/Home/Recurso7.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import empleada from "../../assets/Registro-empleados/Foto-de-Perfil-mi-perfil.png"
export function Perfilempleado(){
    return(
        <>
         <Navbar />
         <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
         <img className=" absolute -z-20 top-[70%] -left-[150px]" src={garabatoAzul} alt="" />
         <div className="flex justify-center mt-20">
            <div className=" w-[460px] h-auto ">
                <h2>Encuentra ofertas para ti</h2>
                <p className="w-2/5 py-2 mt-10 mb-10 bg-[#F2A378] text-center rounded-lg	">trabajos en remoto</p>
                <div className="flex items-center justify-start gap-2 bg-[#DBDBDB] px-4 py-2 rounded-lg">
            <label  htmlFor="email">
              <img
                src={userEmploye}
                alt=""
                className="  size-8"
              />
            </label>
            <input 
              type="email"
              placeholder="User or Email"
              className=" bg-transparent focus:outline-none text-md font-semibold text-tertiary text-start items-center justify-center"
            />
          </div>


          <div className="flex mt-20 flex-col gap-8">
            <div className="flex shadow-md shadow-gray-600 flex-row items-center bg-[#ffffff] gap-4  justify-center  w-[500px] p-3 ">
                <img className="w-20 " src={empleada} alt="" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-[18px]">Alejandro Marin</h2>
                    <h3 className="text-[14px]">nombre de la empresa</h3>
                    <p className="text-[10px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="flex gap-4 ">
                    <p className="w-2/5  bg-[#E9521D] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    </div>
                </div>
            </div>
            <div className="flex shadow-md shadow-gray-800/50 flex-row items-center gap-4 bg-[#ffffff]  justify-center  w-[500px] p-3 ">
                <img className="w-20 " src={empleada} alt="" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-[18px]">Carolina Perez</h2>
                    <h3 className="text-[14px]">nombre de la empresa</h3>
                    <p className="text-[10px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="flex gap-4 ">
                    <p className="w-2/5  bg-[#E9521D] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    </div>
                </div>

            </div>
            <div className="flex shadow-md shadow-gray-600 flex-row items-center gap-4 bg-[#ffffff]  justify-center  w-[500px] p-3 ">
                <img className="w-20 " src={empleada} alt="" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-[18px]">José Martinez</h2>
                    <h3 className="text-[14px]">nombre de la empresa</h3>
                    <p className="text-[10px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="flex gap-4 ">
                    <p className="w-2/5  bg-[#E9521D] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    </div>
                </div>

            </div>
            <div className="flex shadow-md shadow-gray-600 flex-row items-center gap-4 bg-[#ffffff]  justify-center  w-[500px] p-3 ">
                <img className="w-20 " src={empleada} alt="" />
                <div className="flex flex-col justify-center">
                    <h2 className="text-[18px]">Diseñador grafico creativo</h2>
                    <h3 className="text-[14px]">nombre de la empresa</h3>
                    <p className="text-[10px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="flex gap-4 ">
                    <p className="w-2/5  bg-[#E9521D] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    <p className="w-2/5  bg-[#DBDBDB] text-center rounded-lg	">Adove</p>
                    </div>
                </div>

            </div>
   
          </div>

            </div>

            

         </div>
         <div className="w-full flex justify-center mt-20">
         <button className="bg-[#39B7B5]">Ofertas anteriores</button>
         </div>
         
         <Footer />
        </>
    )
}