import React from 'react';
import Gasto from './Gasto';

function ListadoGastos({
    gastos,
    setGastoEditar,
    setGastos,
    filtro,
    gastosFiltrados,
}) {
    return (
        <div className='listado-gastos contenedor'>
            {filtro ? (
                <>
                    <h2>
                        {gastosFiltrados.length
                            ? 'Listado de Gastos'
                            : 'No hay Gastos aún'}
                    </h2>
                    {gastosFiltrados.map((gasto) => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            gastos={gastos}
                            setGastos={setGastos}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2>
                        {gastos.length
                            ? 'Listado de Gastos'
                            : 'No hay Gastos aún'}
                    </h2>
                    {gastos.map((gasto) => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            gastos={gastos}
                            setGastos={setGastos}
                        />
                    ))}
                </>
            )}
        </div>
    );
}

export default ListadoGastos;
