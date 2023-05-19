/**
 * Модуль утилитарных функций:
 *  - для обработки данных из amoCRM;
 *  - общего назначения; 
 */

const fs = require("fs");
const logger = require("./logger");
const { TO_MILISECONDS_MULTIPLIER } = require("./const");

/**
 * Функция извлекает значение из id поля, массива полей custom_fields сущности amoCRM
 * 
 * @param {*} date - дата из поля даты рождения;
 * @returns возвраст контакта
 */
const getAge = (date) => {
	if(new Date(date * TO_MILISECONDS_MULTIPLIER) > Date.now()) {
		return 0
	}
	const [birthDay, birthMonth, birthYear] = new Date(date * 1000).toLocaleDateString().split('.')
	const [currentDay, currentMonth, currentYear] = new Date().toLocaleDateString().split('.')
	let age = currentYear - birthYear

	if(currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
		age -= 1
	}

	return age
}

/**
 * Функция извлекает значение из id поля, массива полей custom_fields сущности amoCRM
 * 
 * @param {*} customFields - массив полей сущности;
 * @param {*} fieldId - id поля из которого нужно получить значение;
 * @returns значение поля
 */
const getFieldValue = (customFields, fieldId) => {
	const field = customFields
		? customFields.find((item) => String(item.field_id || item.id) === String(fieldId))
		: undefined;
	const value = field ? field.values[0] : undefined;
	return value;
};


module.exports = {
	getFieldValue,
	getAge
};
