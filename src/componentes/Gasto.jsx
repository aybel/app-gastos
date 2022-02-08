import React from 'react';
import { formatDate } from '../helpers';


const Gasto = ({ gasto,arrayCategoria }) => {
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                {/*Imagen de la categpria*/}
                <div className="descripcion-gasto">
                    <p className="categoria">
                        {arrayCategoria[gasto.categoria]}
                    </p>
                    <p className="gasto">
                        {gasto.gasto}
                    </p>

                    <p className="gasto">
                        Agregado el: {formatDate(gasto.fecha)}
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">
                $ {gasto.cantidad}
            </p>
        </div>
    );
}

export default Gasto;