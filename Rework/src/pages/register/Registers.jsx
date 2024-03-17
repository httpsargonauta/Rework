import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import jobs from "../../assets/Registro-1/Job-icon.svg";
import decora from "../../assets/Home/Recurso7.png";
import decorama from "../../assets/Home/Recurso8.png";
import { InputCustom } from "../../components/inputs/InputCustom";
import { useFormik } from "formik";
import { postDataApi } from "../../env/backend";

export function Registers() {
  const getChange = (data, name) => {
    formik.values[name] = data;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => registerApi(values),
  });

  const registerApi = (data) => {
    data.isEmploye = true
    postDataApi('/auth/register', data).then((response) => {
      console.log(response);
    })
  };

  return (
    <>
      <Navbar />
      <img className="garabato absolute -z-10 top-40 -right-20 " src={decora} alt=""/>
      <img className=" absolute -z-10 top-[50%] -left-[150px]" src={decorama} alt=""/>
      <div className="flex flex-col justify-center items-center pt-20 ">
        <img className="w-80" src={jobs} alt="" />
        <h1 className="mb-10">¡Bienvenidos!</h1>
        <button className="mb-10">Encuentra empleos remotos</button>
        <h2>¡Registrate!</h2>
      </div>

      <section className="mt-12 flex flex-col items-center gap-4">
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <InputCustom
            label={"Email"}
            name={"username"}
            onChangeInput={getChange}
            placeholder={"Usuario"}
            type={"text"}
            firstIcon={"userIcon"}
            startIcon={true}
            endIcon={false}
          ></InputCustom>

          <InputCustom
            label={"Email"}
            name={"email"}
            onChangeInput={getChange}
            placeholder={"Correo electronico"}
            type={"email"}
            firstIcon={"emailIcon"}
            startIcon={true}
            endIcon={false}
          ></InputCustom>

          <InputCustom
            label={"Password"}
            name={"password"}
            onChangeInput={getChange}
            placeholder={"Contrasñea"}
            firstIcon={"passwordIcon"}
            secondIcon={"eyeIcon"}
            startIcon={true}
            endIcon={true}
          ></InputCustom>
          <button>Registrate</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
