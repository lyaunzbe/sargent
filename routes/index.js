
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log(req.session);
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
