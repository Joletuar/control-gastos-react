function Filtros({ filtro, setFiltro }) {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label htmlFor='lista'>Filtrar Gastos</label>
                    <select
                        name='lista'
                        id='lista'
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
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
                </div>
            </form>
        </div>
    );
}

export default Filtros;
