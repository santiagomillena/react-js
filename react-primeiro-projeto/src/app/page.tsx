import { Circle } from "@/components/Circle";
import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";
import { Square } from "@/components/Square";

const Page = () => {
  return (
    <div>
      <h1 className="text-indigo-700 font-bold text-xl" >Olá Mundo</h1>
      <h2>Primeiro componente em react</h2>
      <GeoForm/>
      <Person/>
    </div>
  );
}

export default Page;