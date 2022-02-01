import { useState } from 'react'
import Header from './componentes/Header';
import IconoNuevo from './img/nuevo-gasto.svg'
import Modal from './componentes/Modal';
function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidppto, setIsValidppto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal]=useState(false)
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
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
        <div className="nuevo-gasto">
          <img
            src={IconoNuevo}
            alt="Nueva necesidad"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      }

    </div>
  )
}

export default App
