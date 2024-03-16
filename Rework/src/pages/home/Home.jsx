import Gordito from "../../../src/assets/Registro-1/gordito.png";
import imgia from "../../assets/SVG/Recurso4.svg";
import amari from "../../assets/SVG/Recurso3.svg";
import azul from "../../assets/SVG/Recurso2.svg";
import decora from "../../assets/Home/Recurso7.png"
import decorama from "../../assets/Home/Recurso8.png"
import { home } from "./home.data";
import {Navbar} from '../../components/navbar/Navbar'

export function Home() {
    const returnImage = (image) => {
        if(image == 'circuito') return <img className="w-20" src={imgia} alt="" />
        if(image == 'laptop') return <img className="w-20" src={amari} alt="" />
        if(image == 'mano') return <img className="w-20" src={azul} alt="" />
    }

    return (
        <>
            <body className="relative overflow-hidden	" >
                <Navbar/>
                <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
                    <img className=" absolute -z-10 top-[50%] -left-[150px]" src={decorama} alt="" />

                <div className="flex flex-col justify-center items-center pt-20 ">
                    <img className="w-72" src={Gordito} alt="" />
                    <h1>¡Bienvenidos!</h1>
                    <button>Profesionales en Remoto</button>
                    <p className="w-3/4	mt-10 mb-10 text-center	">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
                        laudantium laborum. Voluptas reprehenderit nobis eligendi debitis,
                        illum, molestias, minima quos corporis ipsa distinctio magni odio
                        beatae deleniti quibusdam quaerat exercitationem.
                    </p>
                    <div className="flex flex-col justify-center items-center gap-10">
                        {home.map((card) => (
                            <div key={card.title} className="flex flex-col justify-center items-center bg-[#192E4D] w-[25rem] p-10 gap-5 rounded-[15px]">
                                {returnImage(card.img)}
                                <h2 className={card.color}>{card.title}</h2>
                                <p className="text-center text-white">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#39B7B5] w-full flex justify-center p-16 mt-8 ">
                        <button className="relative w-[20rem] h-[4rem] bg-[#e9521d]">
                            <p className="absolute top-3   left-14 text-3xl ">
                                Registrate
                            </p>
                            <img src="" alt="" />
                        </button>
                    </div>
                </div>
            </body>
        </>
    );
}