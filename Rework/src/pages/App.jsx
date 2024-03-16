import { Card } from "../components/card";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 h-full flex-1 justify-center items-center">
      <section className="flex flex-col gap-4 max-w-lg justify-center items-center">
        <Card
          title="Filtrado inicial por IA"
          image="src/assets/Home/SVG/IA.svg"
          description="Utilizamos herramientas de inteligencia artificial para filtrar las propuestas de trabajo mas relevantes para usted segun los criterios de búsqueda establecidos."
          titleColor="text-primary"
        />
      </section>
    </div>
  );
};
