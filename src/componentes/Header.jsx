import React from 'react'
import Nuevoppto from './Nuevoppto';
import ControlPresupuesto from './ControlPresupuesto';
const Header = ({
    presupuesto,
    setPresupuesto,
    isValidppto,
    setIsValidppto }
) => {
    return (
        <header>
            <h1>Planificador financiero de gastos y ganancias personales</h1>
            {isValidppto ? (
                <ControlPresupuesto
                presupuesto={presupuesto}
                 />
            ) : (
                <Nuevoppto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidppto={setIsValidppto}
                />
            )}
        </header>
    );
}

export default Header;