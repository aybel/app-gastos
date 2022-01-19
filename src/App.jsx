import { useState } from 'react'
import Header from './componentes/Header';
import IconoNuevo from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidppto, setIsValidppto] = useState(false);
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
          <img src={IconoNuevo} alt="Nueva necesidad" />
        </div>
      )}


    </div>
  )
}

export default App
