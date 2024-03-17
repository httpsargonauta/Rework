import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import senora from "../../assets/publicatuOfertaDeEmpleo/Recurso25.png";



export function PresentacionEmpresa(){
    return(
        <>
        <Navbar />
        <div className="flex justify-center">
        <div className=" w-[460px] h-auto ">
 
        <section className="flex w-[500px] mt-20  items-center mr-5 ml-5 ">
            <img className="mr-5 w-[150px] " src={senora} alt="" />
            <div>
            
            <h2>SIEVE</h2>
            <h3>Agencia de marketing</h3>
            <p>España</p>
            <p className="w-72	">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed voluptates amet enim nisi, deleniti nobis quaerat. Quod repellat voluptatum laboriosam. Dolor, fuga culpa. Modi repellat eveniet rerum excepturi velit!</p>
            </div>
        <div>
        </div>
        </section>
        <section className="flex flex-col ">
        <h2>Habilidades Requerida</h2>
        <div className="flex gap-4 flex-wrap justify-center">
        <p className="w-2/5 py-2 bg-[#39B7B5] text-center rounded-lg	">Adove</p>
        <p className="w-2/5 py-2 bg-[#DBDBDB] text-center rounded-lg	">ilustrator</p>
        <p className="w-2/5 py-2 bg-[#DBDBDB]  text-center rounded-lg	">Adove</p>
        <p className="w-2/5 py-2 bg-[#DBDBDB]  text-center rounded-lg	">Adove</p>


        </div>

        <h2>Como nos gusta nuestros profesionales</h2>
        <p>Diseñadora grafica</p>
        <p>Empresa:ABC creative</p>
        <p>Periodo: Enero 2020-Actualidad</p>
        <h3>Descripcion:</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe totam aliquid illo maxime praesentium esse eum sequi ducimus, soluta dignissimos. Voluptas veritatis tenetur et impedit expedita amet quibusdam soluta distinctio.</p>
        <div className="mt-10">
            
        <p>Profesionales que buscamos</p>
        <p>Empresa:ABC creative</p>
        <p>Periodo: Enero 2020-Actualidad</p>
        <h3>Descripcion:</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe totam aliquid illo maxime praesentium esse eum sequi ducimus, soluta dignissimos. Voluptas veritatis tenetur et impedit expedita amet quibusdam soluta distinctio.</p>

        </div>

        

        </section>
        </div>
        </div>




        <Footer />
        </>
    )
}