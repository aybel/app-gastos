import { useState } from 'react';
import React from 'react'
import Mensaje from './Mensaje';
const Nuevoppto = ({ presupuesto, setPresupuesto, setIsValidppto }) => {

    const [validacion, setValidacion] = useState("");

    const enviarPresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setValidacion("No es un presupuesto válido");
            return;
        }
        //Borramos el error
        setValidacion('');
        setIsValidppto(true);

    }


    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form action="" className='formulario' onSubmit={enviarPresupuesto}>
                <div className='campo'>
                    <label htmlFor="">Definir presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Captura cuanto robas al mes'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="añadir" name="añadir" id="añadir" />
                {validacion ? <Mensaje tipo="error" children={validacion} /> : ""}
            </form>
        </div>
    );
}

export default Nuevoppto;