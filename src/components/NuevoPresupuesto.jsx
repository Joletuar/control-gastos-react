import { useState } from 'react';
import Mensaje from './Mensaje';

function NuevoPresupuesto({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto,
}) {
    const [mensaje, setMensaje] = useState('');

    const onHandlePresupuesto = (e) => {
        e.preventDefault();

        if (presupuesto <= 0 || !presupuesto) {
            setMensaje('Presupuesto no válido');
            return;
        }

        setIsValidPresupuesto(true);
        setMensaje('');
    };

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={onHandlePresupuesto}>
                <div className='campo'>
                    <label htmlFor='presupuesto'>Definir Presupuesto</label>
                    <input
                        type='number'
                        id='presupuesto'
                        value={presupuesto}
                        className='nuevo-presupuesto'
                        placeholder='Define tu presupuesto'
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                    <input type='submit' value='Añadir' />

                    {mensaje && <Mensaje tipo={'error'}> {mensaje} </Mensaje>}
                </div>
            </form>
        </div>
    );
}

export default NuevoPresupuesto;
