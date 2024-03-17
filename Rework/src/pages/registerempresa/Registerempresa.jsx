import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import senora from "../../assets/Registro-empresas/Imagendemujer-icon.png";
import { InputCustom } from "../../components/inputs/InputCustom";
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"

export function Registersempresa() {
  return (
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
        <form className="flex flex-col gap-4">

          <InputCustom 
              label={"email"} 
              placeholder={"User or Email"} 
              firstIcon={"userIcon"}
              startIcon={true}
              endIcon={false}
            ></InputCustom>

          <InputCustom 
              label={"password"} 
              placeholder={"Password"} 
              firstIcon={"passwordIcon"}
              secondIcon={"passwordIcon"}
              startIcon={true}
              endIcon={true}
            ></InputCustom>
          <InputCustom 
              label={"password"} 
              placeholder={"Password"} 
              firstIcon={"passwordIcon"}
              secondIcon={"passwordIcon"}
              startIcon={true}
              endIcon={true}
            ></InputCustom>
          <InputCustom 
              label={"password"} 
              placeholder={"Password"} 
              firstIcon={"passwordIcon"}
              secondIcon={"passwordIcon"}
              startIcon={true}
              endIcon={true}
            ></InputCustom>
          <InputCustom 
              label={"password"} 
              placeholder={"Password"} 
              firstIcon={"passwordIcon"}
              secondIcon={"passwordIcon"}
              startIcon={true}
              endIcon={true}
            ></InputCustom>
          <button className="bg-[#75C5C3]" >Registrate</button>
        </form>
      </section>
      <Footer />
    </>

  )
}
