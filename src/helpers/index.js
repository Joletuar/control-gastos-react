export const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36).substring(2);

    return random + fecha;
};

export const formatearFecha = (fecha) => {
    const fechaNew = new Date(fecha);

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    return fechaNew.toLocaleDateString('es-ES', opciones);
};
