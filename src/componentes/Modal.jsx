import { useState } from 'react';
import CerrarImg from '../img/cerrar.svg';
import Swal from 'sweetalert2'
const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const [gasto, setGasto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje,setMensaje]=useState('')
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
            Swal.fire({
                icon: 'error',
                title: 'Validación',
                text: 'Error, todos los campos son obligatorios, revise por favor el formulario',
               
            })
            return
        }
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
                <div className='campo'>
                    <label htmlFor="nombre">Nombre gasto</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder='Agrega el nombre del gasto'
                        value={gasto}
                        onChange={e => setGasto(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="nombre">Cantidad del gasto</label>
                    <input
                        id="cantidad"
                        type="number"
                        placeholder='Agrega la cantiddad del gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="nombre">Categoría</label>
                    <select
                        name=""
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="1">Ahorro</option>
                        <option value="2">Comida</option>
                        <option value="3">Casa</option>
                        <option value="4">Gastos varios</option>
                        <option value="5">Ocio</option>
                        <option value="6">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Agregar gasto" />
            </form>
        </div>
    );
}

export default Modal;