import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import decora from "../../assets/Home/Recurso7.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import empleada from "../../assets/Registro-empleados/Foto-de-Perfil-mi-perfil.png"
import { people } from "./Encuentroempleados.data";
export function Encuentroempleados() {

    const setColor = (number) => {
        const className = number == 0 ? 'w-2/5  bg-[#39B7B5] text-center rounded-lg' : 'w-2/5  bg-[#DBDBDB] text-center rounded-lg';
        return className;
    }

    return (
        <>
            <Navbar />
            <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
            <img className=" absolute -z-20 top-[70%] -left-[150px]" src={garabatoAzul} alt="" />
            <div className="flex justify-center mt-20">
                <div className=" w-[460px] h-auto ">
                    <h2>Hemos encontrado a tus profesionales</h2>
                    <p className="w-2/5 py-2 mt-10 mb-10 bg-[#F2A378] text-center rounded-lg	">trabajos en remoto</p>

                    <div className="flex mt-20 flex-col items-center justify-center gap-8">
                        {people.map((person, index) => (
                            <div key={index} className="flex shadow-md shadow-gray-600 flex-row items-center bg-[#ffffff] gap-4  justify-center  w-[35em] p-3 ">
                                <img className="w-20 " src={empleada} alt="" />
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-[18px]">{person.name}</h2>
                                    <h3 className="text-[14px]">{person.ocupation}</h3>
                                    <p className="text-[10px]">{person.description}</p>
                                    <div className="flex gap-4 ">
                                        {person.skills.map((skil, color) => (
                                            <p  key={color} className={setColor(color)}>{skil}</p>
                                        ))}
                                    </div>
                                    <button className="p-0 mt-10 bg-[#39B7B5]">Entrevistar ahora</button>
                                </div>
                            </div>
                        ))}
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