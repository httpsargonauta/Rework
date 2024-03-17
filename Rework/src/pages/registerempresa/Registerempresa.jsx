import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import senora from "../../assets/Registro-empresas/Imagendemujer-icon.png";
import { InputCustom } from "../../components/inputs/InputCustom";
import garabatoAzul from "../../assets/Registro-1/garbatoazul.png"
import { inputs } from './registerempresa.data';
import { useFormik } from "formik";
import { postDataApi } from "../../env/backend";

export function Registersempresa() {
  const getChange = (data, name) => {
    formik.values[name] = data;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      country: "",
      area: "",
      phone: "",
    },
    onSubmit: (values) => registerApi(values),
  });

  const registerApi = (data) => {
    data.isEmploye = false;

    postDataApi('/auth/register', data).then((response) => {
      console.log(response);
    })
  };


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
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>

        {inputs.map((input, key) => (
            <InputCustom
              key={key}
              label={input.label}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChangeInput={getChange}
              firstIcon={input.firstIcon}
              startIcon={input.startIcon}
              secondIcon={input.secondIcon}
              endIcon={input.endIcon}
            ></InputCustom>
          ))}
          <button className="bg-[#75C5C3]" type="submit">Registrate</button>
        </form>
      </section>
      <Footer />
    </>

  )
}
