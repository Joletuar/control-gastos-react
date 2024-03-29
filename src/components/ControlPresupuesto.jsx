import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
}) {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    // Calcular el porcentaje gastado
    const nuevoPorcentaje =
      ((presupuesto - totalDisponible) / presupuesto) * 100;

    setDisponible(totalDisponible);
    setGastado(totalGastado);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const resetear = () => {
    setGastos([]);
    setPresupuesto(0);
    setIsValidPresupuesto(false);
  };

  return (
    <div className='contenedor-presupuesto sombra contenedor dos-columnas'>
      <div>
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje.toFixed(2)}% Gastado`}
          styles={buildStyles({
            pathColor: '#B3005E',
          })}
        />
      </div>

      <div className='contenido-presupuesto'>
        <button className='reset-app' onClick={resetear}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : 0}`}>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
