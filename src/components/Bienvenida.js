import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setEjemploAction } from '@actions/ejemplo.action';

const Contenedor = styled.div`
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    color: #000;
`;

const Bienvenida = ({ saludo }) => {
	const data = useSelector((store) => store.ejemplo?.data);
	const dispatch = useDispatch();

	const cargar = () => dispatch(setEjemploAction());

	return (
		<Contenedor>
			<h5>{saludo}</h5>
			<p>{data?.nombre}</p>

			<button onClick={cargar}>Cargar data</button>
		</Contenedor>
	);
};

Bienvenida.defaultProps = {
	saludo: 'Bienvenidos!',
};
Bienvenida.propTypes = {
	saludo: PropTypes.string,
};

export default Bienvenida;
