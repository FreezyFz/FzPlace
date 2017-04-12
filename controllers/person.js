var Person = require('../models/person');

module.exports = (req, res, next)=>{
	// res.send('Thank you!');
	var person = new Person({
		name: req.body.name,
		commet: req.body.commet
	});
	person.save(function(err){
		if (err) throw err;
		console.log('saved!');
	}).then(
		Person.find({}, function(err, users) {
			if (err) throw err;

			res.render('mine', {userinfos: users});
		})
	);
}
