
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log('BOOOOOO');
  if(req.session.token){
    console.log();
  }
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

//exports.user = function(req,res){
  //if(req.session.user){
    //res.send(req.session.user);
    //res.redirect('')
  //}
//}
