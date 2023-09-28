import { useState } from 'react'
import '../src/style.css'


export const Calculadora = () => {

    const [pantalla, setPantalla] = useState("");

    const handlerBoton = (valor) => {
        setPantalla((prevPantalla) => prevPantalla + valor);
    }
    const handlerBotonIqual = () => {
        try {
            const resultado = eval(pantalla);
            setPantalla(resultado.toString());
        } catch (error) {

            setPantalla('Error');
        }
    };


    const handlerBotonBorrar = () => {
        setPantalla((prevPantalla) => prevPantalla = "");
    }
    const [show, setShow] = useState(true);
    const ChangeIcon = (event) => {
        setShow(!show)
    }

    return (
        <>
            <h1>Calculadora con React 🤩🤯</h1>
            <div className='calculadora'>
                <div className="pantalla" > {pantalla} </div>

                <div className="teclado">
                    <div className="botones" onClick={() => handlerBoton("7")}>7</div>
                    <div className="botones" onClick={() => handlerBoton("8")}>8</div>
                    <div className="botones" onClick={() => handlerBoton("9")}>9</div>
                    <div className="botones" onClick={() => handlerBoton("4")}>4</div>
                    <div className="botones" onClick={() => handlerBoton("5")}>5</div>
                    <div className="botones" onClick={() => handlerBoton("6")}>6</div>
                    <div className="botones" onClick={() => handlerBoton("1")}>1</div>
                    <div className="botones" onClick={() => handlerBoton("2")}>2</div>
                    <div className="botones" onClick={() => handlerBoton("3")}>3</div>
                    <div className="botones" onClick={() => handlerBoton("0")}>0</div>
                    <div className="botones" onClick={() => handlerBoton(".")}>.</div>
                    <div className="botones" onClick={() => handlerBoton("-")}>-</div>
                    <div className="botones" onClick={() => handlerBoton("+")}>+</div>
                    <div className="botones" onClick={() => handlerBoton('/')}>/</div>
                    <div className="botones" onClick={() => handlerBoton('*')}>*</div>
                    <div className="botones" onClick={() => handlerBotonIqual()}>=</div>
                    <div className="botones" onClick={() => handlerBotonBorrar()}>C</div>
                    <h2 className='logo'>Max</h2>
                </div>

            </div>

            
        </>
    )
}
