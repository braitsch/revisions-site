
module.exports = function(app) {

	app.get('/', function(req, res){
		res.render('index');
	});
	
	app.get('/beta', function(req, res){
		res.render('beta');
	});
	
	app.get('/help', function(req, res){
		res.render('help');
	});
	
	app.get('/issues', function(req, res){
		res.render('issues');
	});
	
	app.post('/signup', function(req, res){
		console.log(req.param('name'), req.param('email'), req.param('platform'));
		res.send('ok', 200);
	});
	
	app.get('*', function(req, res){
		res.render('404', { title: 'Page Not Found'})
	});

};