import { Square,Circle } from "@/components/Geo";

function Page(){
  return (
    <div>
      <h1 className="text-indigo-700 font-bold text-xl" >Olá Mundo</h1>
      <h2>Primeiro componente em react</h2>

    <Square/>
    <Circle/>
    </div>
  );
}

export default Page;