// Solo te muestra el texto asta donde tu le especificas y al final muestra el caracter que tu le envies
export const replaceCharacters = (text, numberCharacters = 35, chartsEnd = '...') => {
	let characters = '';
	if (text.length > numberCharacters) characters = `${text.substring(0, numberCharacters)}${chartsEnd}`;
	else characters = text;
	return characters;
};
