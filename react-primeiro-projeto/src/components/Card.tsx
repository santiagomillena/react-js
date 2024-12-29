import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Card = ({children}: Props) => {
    return (
        <div className="w-96 border-2 border-green-400 bg-sky-700 text-xl text-center">
            {children}
        </div>
    )
}