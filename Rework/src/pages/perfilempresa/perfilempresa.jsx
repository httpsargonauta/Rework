import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import decora from "../../assets/Home/Recurso7.png";
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png";
import senora from "../../assets/publicatuOfertaDeEmpleo/Recurso25.png";

import { InputCustom } from "../../components/inputs/InputCustom";
import { ofertas } from "./perfilempresa.data";
export function Perfilempresa() {

    const setClass = (number) => {
        const className = number == 0 ? 'w-2/5 bg-[#E9521D] text-center rounded-lg' : 'w-2/5  bg-[#DBDBDB] text-center rounded-lg';
        return className
    }
    return (
        <>
            <Navbar />
            <img
                className="garabato absolute -z-10 top-40 -right-20 "
                src={decora}
                alt=""
            />
            <img
                className=" absolute -z-20 top-[70%] -left-[150px]"
                src={garabatoAzul}
                alt=""
            />
            <div className="flex justify-center mt-20">
                <div className=" w-[460px] h-auto ">
                    <h2>Encuentra ofertas para ti</h2>
                    <p className="w-2/5 py-2 mt-10 mb-10 bg-[#F2A378] text-center rounded-lg	">
                        Trabajos en remoto
                    </p>

                    <InputCustom
                        label={"searcg"}
                        placeholder={""}
                        type={"text"}
                        firstIcon={"lupaIcon"}
                        startIcon={true}
                        endIcon={false}
                    ></InputCustom>

                    <div className="flex mt-20 flex-col items-center justify-center gap-8">
                        {ofertas.map((off, index) => (
                            <div key={index} className="flex shadow-md shadow-gray-600 flex-row items-center gap-4  justify-center w-[35rem] p-3 ">
                                <img className="w-20 " src={senora} alt="" />
                                <div className="flex flex-col justify-center w-[80%]">
                                    <h2 className="text-[18px]">{off.title}</h2>
                                    <h3 className="text-[14px]">{off.name}</h3>
                                    <p className="text-[10px]">
                                        {off.description}
                                    </p>
                                    <div className="flex gap-4 w-[20rem] overflow-x-hidden">
                                        {off.skills.map((skil, color)=> (
                                            <p key={skil} className={setClass(color)}>
                                                {skil}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-[8rem]">
                                    <h2>
                                        <p className="py-2 bg-[#DBDBDB] text-center rounded-lg	">
                                            {off.price}
                                        </p>
                                    </h2>
                                    <p className="text-[10px]">Oferta Activa:</p>
                                    <p className="text-[10px]">Quedan 2 horas </p>
                                    <p className="text-[10px]">Hora: {off.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-20">
                <button>Ofertas anteriores</button>
            </div>

            <Footer />
        </>
    );
}
