import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import empleada from "../../assets/Registro-empleados/Foto-de-Perfil-mi-perfil.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import decora from "../../assets/Home/Recurso7.png"
import { inputs } from "./creatuperfil.data";
import { InputCustom } from "../../components/inputs/InputCustom";

export function Creatuperfil() {
  return (
    <>
      <Navbar />
      <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
      <img className=" absolute -z-20 top-[50%] -left-[150px]" src={garabatoAzul} alt="" />
      <div className="flex flex-col justify-center items-center pt-20 ">
        <h1 className="mb-10">Crea tu perfil</h1>
        <img src={empleada} alt="" />

      </div>
      <section className="mt-12 flex flex-col items-center gap-4">
        <form className="flex flex-col gap-4">

          {inputs.map((input, key) => (
            <InputCustom
              key={key}
              label={input.label}
              type={input.type}
              placeholder={input.placeholder}
              firstIcon={input.firstIcon}
              startIcon={input.startIcon}
              endIcon={input.endIcon}
            ></InputCustom>
          ))}
          <button className="bg-[#75C5C3]" >Guardar información</button>
        </form>
      </section>
      <Footer />
    </>
  )
}