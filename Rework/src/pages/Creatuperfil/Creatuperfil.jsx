import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import empleada from "../../assets/Registro-empleados/Foto-de-Perfil-mi-perfil.png"
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import decora from "../../assets/Home/Recurso7.png"
import { inputs } from "./creatuperfil.data";
import { InputCustom } from "../../components/inputs/InputCustom";
import { useFormik } from "formik";
import { postDataApi, putDataApi } from "../../env/backend";
import { useEffect } from "react";

export function Creatuperfil() {
  const getChange = (data, name) => {
    formik.values[name] = data;
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      country: '',
      ocupation: '',
      description: '',
      skills: '',
      experience: ''
    },
    onSubmit: (values) => registerApi(values),
  });

  const getProfile = () => {
    const dataLocal = JSON.parse(localStorage.getItem('userData'));
    const idUser = {idUser: dataLocal.idUser }
    postDataApi('/user', idUser).then((response) => {
      if(response){
        formik.values.country = response.data.country;
        formik.values.fullName = response.data.fullName;
        formik.values.ocupation = response.data.ocupation;
        formik.values.description = response.data.description;
        formik.values.skills = response.data.skills;
        formik.values.experience = response.data.experience;
      }
    })
  }

  const registerApi = (data) => {
    const dataLocal = JSON.parse(localStorage.getItem('userData'));
    data.idUser = dataLocal.idUser
    putDataApi('/user', data).then((response) => {
      console.log(response);
    })
  };

  useEffect(() => {
    getProfile()
  }, [])

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
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>

          {inputs.map((input, key) => (
            <InputCustom
              key={key}
              label={input.label}
              type={input.type}
              name={input.name}
              onChangeInput={getChange}
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