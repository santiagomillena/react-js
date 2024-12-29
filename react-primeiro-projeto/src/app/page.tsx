import { Circle } from "@/components/Circle";
import { GeoForm } from "@/components/GeoForm";
import { NewPerson } from "@/components/NewPerson";
import { Person } from "@/components/Person";
import { Square } from "@/components/Square";
import { Card } from "@/components/Card";

const Page = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-indigo-700 font-bold text-xl" >Olá Mundo</h1>
      <h2>Primeiro componente em react</h2>
      <GeoForm/>
      <Person/>
      <NewPerson
      name="Enami Asa"
      stageName="ASA"
      avatar="https://i.pinimg.com/736x/7b/b4/c6/7bb4c698cd6c736fd7c59e93fe22727d.jpg"
      age={18}
      roles={['Main Rapper', 'Main Dancer']}
      />
      <NewPerson
      name="Shin Ryu-jin (신류진)"
      stageName="Ryujin (류진)"
      avatar="https://i.pinimg.com/736x/a2/39/dd/a239dd5aa36ae3764dd0ba2497c5f5ec.jpg"
      age={23}
      roles={['Main Rapper', 'Lead Dancer']}
      />
       <NewPerson
      name="Kim Min-jeong (김민정)"
      stageName="Winter ( 윈터 )"
      avatar="https://i.pinimg.com/originals/e8/ab/01/e8ab0178799a59944093696d8ecc2842.jpg"
      age={23}
      roles={['Main Vocalist', 'Lead Dancer']}
      />

      <Card>
        <h3 className="text-3xl font-bold text-green-300">"Frase de efeito"</h3>
        <p className="text-right text-sm">- Autor desconhecido.</p>

      </Card>
    </div>
  );
}

export default Page;