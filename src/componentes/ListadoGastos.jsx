import React from 'react'
import Gasto from './Gasto';
const ListadoGastos = ({ gastos,arrayCategoria }) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? "Gastos" : "No hay gastos todavía"}</h2>
            {
                gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        arrayCategoria={arrayCategoria}
                        >
                    </Gasto>
                ))
            }
        </div>
    );
}

export default ListadoGastos;