import { useState } from 'react';
import CerrarImg from '../img/cerrar.svg';
import Swal from 'sweetalert2';
import Mensaje from './Mensaje';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [gasto, setGasto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

    const ocultarModal = () => {
        setModal(false);
        //reseteamos la animación del modal
        setTimeout(() => {
            setAnimarModal(false);
        }, 500);
    }
    const enviarFormulario = (e) => {
        e.preventDefault();
        //Validamos los campos
        if ([gasto, cantidad, categoria].includes('')) {
            setMensaje("Los campos son obligatorios.");
            setTimeout(() => {
                setMensaje("");
            }, 3000);
            return;
        }

        guardarGasto({ gasto, cantidad, categoria })
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarImg}
                    alt="Cerrar mdoal"
                    onClick={ocultarModal}
                />
            </div>
            <form
                onSubmit={enviarFormulario}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
            >
                <legend>Nuevo antojo</legend>
                {mensaje ? <Mensaje tipo="error">{mensaje}</Mensaje> : ""}
                <div className='campo'>
                    <label htmlFor="gasto">gasto gasto</label>
                    <input
                        id="gasto"
                        type="text"
                        placeholder='Agrega el gasto del gasto'
                        value={gasto}
                        onChange={e => setGasto(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="gasto">Cantidad del gasto</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder='Agrega la cantiddad del gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="gasto">Categoría</label>
                    <select
                        name=""
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="0">Ahorro</option>
                        <option value="1">Comida</option>
                        <option value="2">Casa</option>
                        <option value="3">Gastos varios</option>
                        <option value="4">Ocio</option>
                        <option value="5">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Agregar gasto" />
            </form>
        </div>
    );
}

export default Modal;