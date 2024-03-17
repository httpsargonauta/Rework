import { CardEmply } from "../../components/cardEmply/CardEmply";
import woman from "../../assets/Registro-empresas/Imagendemujer-icon.png";
import employe from "../../assets/Registro-empleados/Recurso-registro-empleado.png";
import decora from "../../assets/Home/Recurso7.png";
// import decorama from "../../assets/Home/Recurso8.png";
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png";

import gordito from "../../assets/Registro-1/gordito.png";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { InputCustom } from "../../components/inputs/InputCustom";

import { useFormik } from "formik";
import { postDataApi } from "../../env/backend";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const getChange = (data, name) => {
    formik.values[name] = data;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => registerApi(values),
  });

  const registerApi = (data) => {
    postDataApi('/auth/login', data).then((response) => {
      if(response.success == true){
        if(response.data.isEmploye == 'Empresa'){
          navigate('/')
        } else {
          navigate('/Creatuperfil')
        }
      } else {
        console.log(response);
      }
    })
  };


  return (
    <>
      <Navbar />

      <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt=""/>
      <img className=" absolute -z-20 top-[50%] -left-[150px]" src={garabatoAzul} alt=""/>

      <main className="flex z-10 flex-col items-center w-full gap-4 h-screen bg-cover"
        style={{
          backgroundImage:
            "url('src/assets/Registro-1/Recurso-registro  (1).png')",
        }}
      >
        <section className="flex flex-col items-center justify-center gap-3 mt-12">
          <img src={gordito} className="size-48" alt="Remote Employed" />
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
                <img src={employe} className="size-28" alt="Remote Employed" />
                <h3 className="text-xl font-medium z-10 text-tertiary mt-2">
                  Empleo Remoto
                </h3>
              </div>
            </CardEmply>
            <CardEmply>
              <div className="flex flex-col items-center w-[142px] h-[140px]">
                <img src={woman} className="size-28" alt="Remote Employed" />
                <h3 className="text-xl font-medium  text-tertiary mt-2">
                  Trabajadores
                </h3>
              </div>
            </CardEmply>
          </div>
        </section>

        <section className="mt-12 flex flex-col items-center gap-4">
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <InputCustom 
              label={"Email"} 
              placeholder={"Usuario"} 
              name={"username"}
              onChangeInput={getChange}
              type={"text"} 
              firstIcon={"userIcon"}
              startIcon={true}
              endIcon={false}
            ></InputCustom>

            <InputCustom 
              label={"Email"} 
              placeholder={"Contraseña"} 
              name={"password"}
              onChangeInput={getChange}
              firstIcon={"passwordIcon"}
              secondIcon={"eyeIcon"}
              startIcon={true}
              endIcon={true}
            ></InputCustom>

            <button type="submit" className="text-white rounded-xl bg-[#e9521d]">Inicia sesion</button>
          </form>
        </section>
      <Footer />
      </main>
    </>
  );
};
