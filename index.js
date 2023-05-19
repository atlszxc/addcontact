/**
 * Основной модуль приложения - точка входа. 
 */

const express = require("express");
const api = require("./api");
const logger = require("./logger");
const config = require("./config");
const { getAge, getFieldValue } = require("./utils");
const { BIRTHDAY_FIELD_ID, AGE_FIELD_ID } = require("./const");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

api.getAccessToken().then(() => {
	app.get("/ping", (_, res) => res.send("pong " + Date.now()));

	app.post("/hook", async ({ body: { contacts: { add } } }, res) => {
		const contact = add[0]
		const contactCustomFields = contact.custom_fields

		if(!contactCustomFields) {
			return logger.error('Отсутсвуют кастомные поля')	
		}

		const birthdayFieldValue = Number(getFieldValue(contactCustomFields, BIRTHDAY_FIELD_ID))
		const contactAge = getAge(birthdayFieldValue)

		await api.updateContacts({
			id: Number(contact.id),
			custom_fields_values: [
				{
					field_id: AGE_FIELD_ID,
					values: [
						{
							value: String(contactAge)
						}
					]
				}
			]
		})

		res.send("OK");
	});
	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
