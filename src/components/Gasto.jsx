import { formatearFecha } from '../helpers';

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
} from 'react-swipeable-list';

import 'react-swipeable-list/dist/styles.css';

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoFacturas from '../img/icono_suscripciones.svg';
import IconoGastos from '../img/icono_gastos.svg';

const dictIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    ocio: IconoOcio,
    gastos: IconoGastos,
    salud: IconoSalud,
    facturas: IconoFacturas,
};

function Gasto({ gasto, setGastoEditar, gastos, setGastos }) {
    const { categoria, nombre, cantidad, fecha } = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const borrarGasto = (e) => {
        e.preventDefault();
        if (confirm('Está seguro de borrar')) {
            const gastosFiltrados = gastos.filter(
                (gastoElement) => gastoElement.id != gasto.id
            );
            setGastos(gastosFiltrados);
        }
    };

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()} // Adelante
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img
                            src={dictIconos[categoria]}
                            alt={`icono-${categoria}`}
                        />

                        <div className='descripcion-gasto'>
                            <p className='categoria'>{categoria}</p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>
                                Agregado el: {''}
                                <span>{formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>

                    <div className='contenido-eliminar'>
                        <p className='cantidad-gasto'>${`${cantidad}`}</p>
                        <button
                            type='button'
                            className='btn-eliminar'
                            onClick={(e) => borrarGasto(e)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
}

export default Gasto;
