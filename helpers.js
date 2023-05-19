const age = (date) => {
	if(new Date(date * 1000) > Date.now()) {
		return false
	}
	const birthday = new Date(date * 1000).toLocaleDateString().split('.')
	const today = new Date().toLocaleDateString().split('.')
	let age = today[today.length - 1] - birthday[birthday.length-1]
	if(today[1] < birthday[1] || (today[1] === birthday[1] && today[0] < birthday[0])) {
		age -= 1
	}

	return age
}

module.exports = { age }