export const splitNombre = (srtNombre) => {
	const nombres = srtNombre.split(' ');
	const dataNombres = {
		primerNombre: '',
		segundoNombre: '',
		primerApellido: '',
		segundoApellido: '',
	};
	if (nombres[0]) dataNombres.primerNombre = nombres[0];
	if (nombres[1]) dataNombres.segundoNombre = nombres[1];
	if (nombres[2]) dataNombres.primerApellido = nombres[2];
	if (nombres[3]) dataNombres.segundoApellido = nombres[3];

	return dataNombres;
};
