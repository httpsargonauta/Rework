import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import senora from "../../assets/publicatuOfertaDeEmpleo/Recurso25.png";
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import { InputCustom } from "../../components/inputs/InputCustom";
export function Creatuoferta() {

  return (

    <>
      <Navbar />

      <img className=" absolute -z-20 top-[70%] -left-[150px]" src={garabatoAzul} alt="" />
      <div className="flex flex-col justify-center items-center pt-20 ">
        <h1 className="mb-10">Crea tu oferta</h1>
        <img className="w-80 mb-10" src={senora} alt="" />
          <button className="mb-10 bg-[#75C5C3]">Foto de perfl</button>
        <h2>¡Registrate tu empresa!</h2>
      </div>

      <section className="mt-12 flex flex-col items-center gap-4">
        <form className="flex flex-col gap-4">

        <InputCustom 
              label={"user"} 
              placeholder={"Diseñador gráfico creativo"} 
              firstIcon={"userIcon"}
              startIcon={true}
              endIcon={false}
            ></InputCustom>

          <InputCustom 
              label={"calendar"} 
              placeholder={"5 Dias"} 
              firstIcon={"calendarIcon"}
              startIcon={true}
              endIcon={false}
          ></InputCustom>

          <InputCustom 
              label={"time"} 
              placeholder={"2pm-5pm"} 
              firstIcon={"clockIcon"}
              startIcon={true}
              endIcon={false}
          ></InputCustom>

          <InputCustom 
              label={"suitcase"} 
              placeholder={"Diseñador gráfico"} 
              firstIcon={"suitcaseIcon"}
              startIcon={true}
              endIcon={false}
          ></InputCustom>
          <button className="bg-[#75C5C3]" >Publica tu oferta</button>
        </form>
      </section>
      <Footer />
    </>

  )
}
