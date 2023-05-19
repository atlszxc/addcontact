/**
 * Основной модуль приложения - точка входа. 
 */

const express = require("express");
const api = require("./api");
const logger = require("./logger");
const config = require("./config");
const { age } = require("./helpers");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

api.getAccessToken().then(() => {
	app.get("/ping", (_, res) => res.send("pong " + Date.now()));

	app.post("/hook", async ({ body: { contacts: { add } } }, res) => {
		const user = await api.getContact(add[0].id)
		const values = user.custom_fields_values
		if(values) {
			for (const value of values) {
				if(value.field_name === 'День рождения') {
					const contactAge = age(value.values[0].value)
					if(contactAge !== false) {
						user.custom_fields_values.push({
							field_id: 47857,
							values: [
								{
									value: String(contactAge)
								}
							]
						})
				
						await api.updateContacts({ ...user })
					}
					break
				}
			}	
		}

		res.send("OK");
	});
	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
