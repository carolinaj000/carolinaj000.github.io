module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,html,js,json}'
	],
	swDest: '/js/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};