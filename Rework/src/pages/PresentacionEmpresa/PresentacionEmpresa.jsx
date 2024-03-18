import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import senora from "../../assets/publicatuOfertaDeEmpleo/Recurso25.png";

export function PresentacionEmpresa() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className=" w-[35rem] h-auto ">

                    <section className="flex w-[500px] mt-20  items-center mr-5 ml-5 ">
                        <img className="mr-5 w-[150px] " src={senora} alt="" />
                        <div>

                            <h2>SIEVE</h2>
                            <h3>Agencia de marketing</h3>
                            <p>España</p>
                            <p className="w-72">Nos dedicamos a potenciar la presencia online de empresas que operan en el mundo digital. Nuestro enfoque estratégico y creativo nos permite impulsar el crecimiento de marcas y productos, maximizando su visibilidad y rentabilidad en el competitivo mercado online.</p>
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
                        <p className="mb-5">Buscamos profesionales apasionados por el mundo del e-commerce y el
                            marketing digital, creativos, proactivos y orientados a resultados.</p>

                        <p className="mb-5">Valoramos la capacidad de trabajar en equipo, la adaptabilidad ante los
                            cambios y la disposición para aprender y crecer constantemente en un
                            entorno dinámico y desafiante. Nuestros profesionales deben tener un
                            enfoque centrado en el cliente y un compromiso firme con la excelencia en la
                            ejecución de cada proyecto.</p>

                        <div className="mt-10">
                            <h2>Profesionales que buscamos</h2>
                            <p className="mb-5">Expertos en E-commerce: Profesionales con experiencia en la gestión y optimización de plataformas de comercio electrónico como Shopify, WooCommerce y Magento.</p>

                            <p className="mb-5">Marketing Digital: Especialistas en SEO, SEM, marketing de contenidos, email marketing y redes sociales, c apaces de desarrollar estrategias para aumentar la visibilidad y conversiones. </p>

                            <p className="mb-5">Diseño y UX/UI: Diseñadores con habilidades en UX/UI para crear experiencias atractivas y funcionales que optimicen la conversión en tiendas online. </p>

                            <p className="mb-5">Copywriting: Redactores creativos y persuasivos capaces de generar contenido relevante y convincente para descripciones de productos, blogs y campañas de marketing.</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}