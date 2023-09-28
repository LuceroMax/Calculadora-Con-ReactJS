import { useState } from "react";
export const Contador = ({ value = 0 }) => {

    const [contador, setContador] = useState(value)

    const handleClick = () => {
        setContador(contador + 1);
    }
    const handleClickResta = () => {
        setContador(contador - 1);
    }
    const handleClickx2 = () => {
        setContador(contador * 2);
    }
    const handleClickdiv2 = () => {
        setContador(contador / 2);
    }
    return (
        <>
            <h1>Contador : {contador}</h1>
            <button onClick={handleClick}>Sumar</button>
            <button onClick={handleClickResta}>Restar</button>
            <button onClick={handleClickx2}>x2</button>
            <button onClick={handleClickdiv2}>/2</button>


        </>
    )
}

// (e) => handleClick(e, "arg") SI SON 2 ARGUMENTOS





