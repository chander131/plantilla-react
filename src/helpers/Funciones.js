/**
 * Libreria de funciones
 * @module Helper
 */
module.exports = {
	/**
   * funcion para para validar NIT
   * @name validarNIT
   * @param {string} numero NIT
   */
	validarNIT(numero) {
		let Valido = false;
		const regex = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;

		if (!numero) return Valido;
		if (regex.exec(numero) == null) return Valido;
		if (numero == '0000-000000-000-0') return Valido;

		Valido = true;
		const x = numero;
		let part;
		let factor = 0;
		let cal = 0;
		let i;
		let n;
		part = x.substring(12, 15);
		part = parseInt(part);
		if (part <= 100) {
			n = 1;
			for (i = 0; i <= 14; i++) {
				if (!(i === 4 || i === 11)) {
					cal += parseInt(x.charAt(i)) * (15 - n);
					n++;
				}
			}
			cal %= 11;
			if (cal == 10) cal = 0;
		} else {
			n = 1;
			for (i = 0; i <= 14; i++) {
				if (!(i === 4 || i === 11)) {
					factor = 3 + 6 * Math.floor(Math.abs((n + 4) / 6)) - n;
					cal += parseInt(x.charAt(i)) * factor;
					n++;
				}
			}
			cal %= 11;
			if (cal > 1) cal = 11 - cal;
			else cal = 0;
		}
		const a = parseInt(x.charAt(16));
		if (a != cal) {
			Valido = false;
		}

		return Valido;
	},
	/**
   * funcion para validar el correo electronico
   * @name validateEmail
   * @param {string} email Correo electronico
   */
	validateEmail: (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	},
	/**
   * funcion para validar el DUI
   * @name verificationDUI
   * @param {string} DUI Numero de documento
   */
	verifycationDUI: (DUI) => {
		const regex = /^[0-9]{8}-[0-9]{1}$/;

		if (!DUI) return false;
		if (regex.exec(DUI) == null) return false;
		if (DUI == '00000000-0') return false;

		if (DUI) {
			const regex = /(^\d{8})-(\d$)/;
			const splitDUI = DUI.match(regex);

			if (splitDUI !== null) {
				const objDUI = {
					digits: splitDUI[1],
					check_digit: parseInt(splitDUI[2]),
				};

				let sum = 0;

				for (let i = 0; i < objDUI.digits.length; i++) {
					const curatedDigits = parseInt(objDUI.digits[i], 10);
					sum += (9 - i) * curatedDigits;
				}

				const division = sum % 10;
				const subtraction = 10 - division;

				if (objDUI.check_digit === subtraction % 10) {
					return true;
				}
				return false;
			}
			return false;
		}
		return false;
	},
	/**
   * funcion para formatear un numero de telefono
   * @name formatoTel
   * @param {string} tel Numero de telefono
   */
	formatoTel: (tel) => {
		const _tel = tel;
		if (_tel) {
			if (_tel.indexOf('-') <= -1 && _tel.length == 8) {
				return `${_tel.substring(0, 4)}-${_tel.substring(4, 8)}`;
			}
		}
		return _tel;
	},
	/**
   * funcion para formatear un numero de DUI
   * @name formatoDUI
   * @param {string} dui Numero de DUI
   */
	formatoDUI: (dui) => {
		const _dui = dui;
		if (_dui) {
			if (_dui.indexOf('-') <= -1 && _dui.length == 9) {
				return `${_dui.substring(0, 8)}-${_dui.substring(8, 9)}`;
			}
		}
		return _dui;
	},
	/**
   * funcion para formatear un numero de NIT
   * @name formatoNIT
   * @param {string} nit Numero de NIT
   */
	formatoNIT: (nit) => {
		let _nit = nit;
		let _rnit = '';
		if (_nit) {
			if (_nit.indexOf('-') <= -1 && _nit.length == 14) {
				_nit = _nit.split('');
				_nit.forEach((v, i) => {
					if (i == 4 || i == 10 || i == 13) _rnit = `${_rnit}-${v}`;
					else _rnit += v;
				});
			}
		}
		return _rnit || _nit;
	},
};
