import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setEjemploAction } from '@actions/ejemplo.action';

const Bienvenida = () => {
    const data = useSelector(store => store.ejemplo?.data);
    const dispatch = useDispatch();

    const cargar = () => {
        return dispatch(setEjemploAction());
    }

    return (
        <div>
            <h5>Bienvenidos!</h5>
            <p>{data?.nombre}</p>

            <button onClick={cargar}>Cargar data</button>
        </div>
    )
}

export default Bienvenida;
