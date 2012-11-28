/*
 * Serve JSON to our AngularJS client
 */

var config = require('../config.js');
var request = require('request'); 


exports.client_id = function(req, res){
  res.json({
    client_id: config.client_id
  })
}

exports.auth = function(req, res){
  console.log(req.query);
  var code = req.query.code;
  getToken(code, function(err, token){
    if(err){
      console.log(err);
    }else{
      req.session.token = token;
      console.log(req.session);
      res.redirect('/');
    }
  });
}

function getToken(code, callback){
  request.post({
    uri:"https://github.com/login/oauth/access_token",
    qs:{code:code, client_id:config.client_id, client_secret:config.client_secret},
    json:true
  }, function(err, resp){
    if(err){
      callback(err);
    }else{
      callback(null, resp.body.access_token);
    }
  })
}
