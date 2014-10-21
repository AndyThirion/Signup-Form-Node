var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	formsubmit: function(req, res) {
		res.redirect('success');
	},
	success: function(req, res) {
		res.send('Success!');
	}
};

module.exports = indexController;