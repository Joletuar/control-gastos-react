import { useEffect, useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje';

function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  presupuesto,
  gastoEditar,
  setGastoEditar,
}) {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const handleOcultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [nombre, cantidad, categoria].includes('') ||
      [nombre, cantidad, categoria].includes(0)
    ) {
      setMensaje('Todos los campos son obligatorio');
      setTimeout(() => {
        setMensaje('');
      }, 1000);
      return;
    }

    if (cantidad > presupuesto) {
      alert('El valor ingresado es mayor a su presupuesto');
      return;
    }

    guardarGasto({ nombre, cantidad, categoria, id, fecha });

    setNombre('');
    setCantidad('');
    setCategoria('');
    handleOcultarModal();
  };

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarBtn} alt='cerrar-modal' onClick={handleOcultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>
          {Object.keys(gastoEditar).length > 0
            ? 'Editar Gasto:'
            : 'Nuevo Gasto'}
        </legend>

        <div className='campo'>
          <label htmlFor='nombre'>Nombre del Gasto:</label>
          <input
            type='text'
            name='nombre'
            id='nombre'
            placeholder='Añade el nombre del gasto'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad:</label>
          <input
            type='number'
            name='cantidad'
            id='cantidad'
            placeholder='$100'
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Caegoria:</label>

          <select
            name='categoria'
            id='categoria'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>--- Seleccione ---</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='ocio'>Ocio</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='salud'>Salud</option>
            <option value='facturas'>Facturas</option>
          </select>

          <input
            type='submit'
            value={
              Object.keys(gastoEditar).length > 0
                ? 'Editar Gasto:'
                : 'Añadir Gasto'
            }
            className='btn-gasto'
          />

          {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}
        </div>
      </form>
    </div>
  );
}

export default Modal;
