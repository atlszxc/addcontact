/**
 * Модуль содержит ключи интеграции и другие конфигурации
 */
const config = {
	// данные для api amocrm
	CLIENT_ID: "efdd9e51-0dac-4a14-b949-c9368ac8d413",
	CLIENT_SECRET: "3hVPY7UjAPoqyuYkxJXwrtKXOTY80mKlbzShLzDM1lnMeF2wrAbyMpityzflgX21",
	//AUTH_CODE живет 20 минут, при перезапуске скрипта нужно брать новый
	AUTH_CODE: "def50200b39a313fbc3addddf34b0d4a9ce982bc12bb7175b2154fdc98d87ea742547fae81f2bab0fa27aab9ce2e718d0592864c4427a4755df862aa6c7fb5713ac305791871dbed7ecf41fc3f9866f7dc9beb1e93ff25d31fa6a29227aa709840597c6091e82584e59aae5dc1c0eb0c32e92e4692a3758b3e26ae60969cd31d2a68367b673ecf4cef1daa070c6ef5ec184ce5ba854ff706f7d60d263fa33a4cde10a40fb9fa47e710f2d19cd2206ffeaa2150fa520846f81bb89982fc0abf6dcca94470ef6841c1e7189bafa96e849047f608c4671bd21d8b2188d69b25a34f6400a12e8ef49d4e574c81480c648285a98a346dc4bae33c1a367e186472cbfe9231c53663e7c26f82ff83acabe16648f75f0baeb5227f17053f766df00beed4279cf6826294a204487d9278a7b4a9a84b0e2e23c844315b56eb8247f38f757a65447945a6ca90ec6c262b21f3c4e207fb18d3186d579b91d9efab7d91ffd38b605b61a9c629be1703f3ee82aa3128e6aeebae74034520181c254e5129165416708f5c86f3f5042718853e90f85b88ae7bad13d738a6b38b0aefc7961bca802a5f7ca825c3c664df943423213dd01a1cf7205762fc8370f80c36e7a6bb622535ba6a0f7232ba22c130b161055bebb846b75e42a555c7f47e25d26bff409618447f6380e569153469f640e92f05c8e1337e56e01e31940dded92c1fe5e8",
	REDIRECT_URI: "https://de56-77-95-90-50.ngrok-free.app/hook",
	SUB_DOMAIN: "work228",
	// конфигурация сервера
	PORT: 8000,
}; 

module.exports = config;
