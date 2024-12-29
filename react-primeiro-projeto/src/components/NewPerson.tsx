// Passando props para um componente

type Props = {
    stageName: string;
    name: string;
    avatar: string;
    age: number;
    roles: string[];
}

// export const NewPerson = (props: Props) => {
export const NewPerson = ({stageName, name, avatar, age , roles}: Props) => {    
    // const {stageName, name , avatar, age, roles} = props;
    return (
        <div>
            <h1>{name}</h1>
            <img src={avatar} alt={name}/>
            <ul>
                <li>{stageName}</li>
                <li>{age}</li>
                <li>{roles[0]}, {roles[1]}</li>
            </ul>
        </div>
    )
}