import React from 'react';
import Bienvenida from '@components/Bienvenida';
import styled from 'styled-components';

const Home = () => (
	<Contenedor>
		<h3>Home</h3>
		<br />
		<Bienvenida />
	</Contenedor>
);

const Contenedor = styled.div`
	
`;

export default Home;
