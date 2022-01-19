import React from 'react'
const ControlPresupuesto = ({ presupuesto }) => {

    const formatCurrency=(cantidad)=>{
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency:'USD'
        });
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div className="">
                <p>Grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>¿cuánto para gastar?: </span>
                     {formatCurrency(presupuesto)}
                </p>
                <p>
                    <span>¿cuánto por disfrutar?: </span>
                     {formatCurrency(0)}
                </p>
                <p>
                    <span>¿cuánto ya se te perdió?: </span>
                     {formatCurrency(0)}
                </p>
            </div>
        </div>
    );
}

export default ControlPresupuesto;