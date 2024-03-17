import { useState } from "react";
import { CardEmply } from "../../components/cardEmply/CardEmply";
import woman from "../../assets/Registro-empresas/Imagendemujer-icon.png";
import employe from "../../assets/Registro-empleados/Recurso-registro-empleado.png";
import userEmploye from "../../assets/Registro-empleados/user-icon-registro-empleados.svg"
import password from "../../assets/Registro-empleados/candado-icon-registro-empleados.svg"
import decora from "../../assets/Home/Recurso7.png"
import decorama from "../../assets/Home/Recurso8.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"

import gordito from "../../assets/Registro-1/gordito.png"
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
export const Register = () => {
  const [type, setType] = useState("password");

  const showPassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <>
    <Navbar/>

    <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt="" />
    <img className=" absolute -z-20 top-[50%] -left-[150px]" src={garabatoAzul} alt="" />

    <main
      className="flex z-10 flex-col items-center w-full gap-4 h-screen bg-cover"
      style={{
        backgroundImage:
          "url('src/assets/Registro-1/Recurso-registro  (1).png')",
      }}
    >
      <section className="flex flex-col items-center justify-center gap-3 mt-12">
        <img
          src={gordito}
          className="size-48"
          alt="Remote Employed"
        />
        <h2 className="text-5xl font-semibold">Bienvenido!</h2>
        <h2 className="bg-secondary px-2 py-1.5 font-semibold text-3xl text-white rounded-md">
          Profesionales en Remoto
        </h2>
      </section>

      <section className="mt-8 flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-tertiary">
          Que estas buscando?
        </h3>
        <div className="flex gap-4">
          <CardEmply>
            <div className="z-10 flex flex-col items-center w-[142px] h-[140px]">
              <img
                src={employe}
                className="size-28"
                alt="Remote Employed"
              />
              <h3 className="text-xl font-medium z-10 text-tertiary mt-2">
                Empleo Remoto
              </h3>
            </div>
          </CardEmply>
          <CardEmply>
            <div className="flex flex-col items-center w-[142px] h-[140px]">
              <img
                src={woman}
                className="size-28"
                alt="Remote Employed"
              />
              <h3 className="text-xl font-medium  text-tertiary mt-2">
                Trabajadores
              </h3>
            </div>
          </CardEmply>
        </div>
      </section>

      <section className="mt-12 flex flex-col items-center gap-4">
        <form
          className="flex flex-col gap-4"
          action=""
          onSubmit={(e) => e.preventDefault()}
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
            <input
              type={type}
              placeholder="User or Email"
              className="bg-transparent focus:outline-none text-md font-semibold text-tertiary text-start items-center justify-center flex-1"
            />
            <label htmlFor="email" onClick={showPassword}>
              <img
                src="src/assets/Registro-1/Recurso-registro  (4).svg"
                alt=""
                className="size-8"
              />
            </label>
          </div>

          <button type="submit">Inicia sesion</button>
        </form>
      </section>
    </main>
    <Footer />

    </>
  );
};
