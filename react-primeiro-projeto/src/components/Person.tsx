const getToday = () => {
    return new Intl.DateTimeFormat('pt-BR',{weekday: 'long'}).format(new Date());
}

export const Person = () => {
    const name: string = 'Asa - BABYMONS7ER';
    const avatar: string = 'https://steamuserimages-a.akamaihd.net/ugc/2256927774995748009/10BAAC39751C2696247C40E909CEBF2D394EDCD1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

    const Asa = {
        name: 'ENAMI ASA',
        avatar: avatar,
        age: 18,
        roles: ['Main Rapper', 'Main Dancer']
    }

    return (
        <div className="container mx-auto" >
{/* Sem script */}

            <h1 className="text-center" >Asa - BABYMONS7ER</h1>
            <div className="flex">
                <img className="w-96  mx-auto" src="https://steamuserimages-a.akamaihd.net/ugc/2256927774995748009/10BAAC39751C2696247C40E909CEBF2D394EDCD1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Asa" />
                <ul className="mt-28 -ml-44">
                    <li>ENAMI ASA 榎並杏紗</li>
                    <li>18 anos (17/04/2006)</li>
                    <li>Naha, Okinawa - Japão</li>
                    <li>Main Rapper</li>
                </ul>
            </div>

{/* JSX e variáveis, funções e objetos */}

            <h1>{name}</h1>
            <div className="flex">
                <img 
                className="w-96  mx-auto" 
                src={avatar} 
                alt="Asa" />

                <ul className="mt-28 -ml-44">
                    <li>ENAMI ASA 榎並杏紗</li>
                    <li>18 anos (17/04/2006)</li>
                    <li>Naha, Okinawa - Japão</li>
                    <li>Main Rapper</li>
                </ul>
            </div>

            <div>
                <h1> Dia da semana: {getToday()} </h1>
            </div>

    {/* Pegando de objetos/arrays (const Asa = {..} */}
            <div>
                <h1>{Asa.name}</h1>
                <img src={Asa.avatar} alt={Asa.name} />
                <ul>
                    <li>{Asa.age}</li>
                    <li>{Asa.roles[0]}</li>
                    <li>{Asa.roles[1]}</li>
                </ul>
            </div>
        </div>
    );
}