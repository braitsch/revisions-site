
module.exports = function(app) {

	app.get('/', function(req, res){
		res.render('index');
	});
	
	app.get('/help', function(req, res){
		res.render('help');
	});
	
	app.get('/issues', function(req, res){
		res.render('issues');
	});
	
	app.get('*', function(req, res){
		res.render('404', { title: 'Page Not Found'})
	});

};