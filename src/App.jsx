import { useState } from 'react'
import Header from './componentes/Header';
import IconoNuevo from './img/nuevo-gasto.svg'
import Modal from './componentes/Modal';
import { generarId } from './helpers';
import ListadoGastos from './componentes/ListadoGastos';
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidppto, setIsValidppto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const arrayCategoria = [
    "Ahorro",
    "Comida",
    "Casa",
    "Gastos varios",
    "Ocio",
    "Suscripciones"
  ];
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  };
  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setModal(false);
    //reseteamos la animación del modal
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);


  }



  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidppto={isValidppto}
        setIsValidppto={setIsValidppto}
      />

      {isValidppto && (
        <>
          <main>

            <ListadoGastos gastos={gastos} arrayCategoria={arrayCategoria}></ListadoGastos>
          </main>

          <div className="nuevo-gasto">
            <img
              src={IconoNuevo}
              alt="Nueva necesidad"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      }

    </div>
  )
}

export default App
