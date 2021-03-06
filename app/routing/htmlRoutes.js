// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	// Home page
	app.get('/home.html', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get('/survey.html', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};