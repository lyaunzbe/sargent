/*
 * Serve JSON to our AngularJS client
 */

var config = require('../config.js');
var request = require('request'); 

var base = 'https://api.github.com/';

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
      getUser(req,function(err,user){
        if(err){
          console.log(err);
        }else{
          console.log('redirecting back');
          req.session.user = user;
          res.redirect('/');
          return;
        }
      });
    }
  });
}

exports.user = function(req,res){
  if(isAuthenticated(req) && req.session.user){
    console.log(req.session.user);
    res.send(req.session.user);
  }else{
    res.send({user: null});

  }
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

function isAuthenticated(req){
  if(req.session.token){
    return true;
  }
  return false;
}

function getUser(req,callback){
  if(isAuthenticated(req)){
    request.get({
    uri: base+'user?access_token='+req.session.token,
    json:true
  }, function(err, resp){
    if(err){
      callback(err);
    }else{
     callback(null,resp.body);
    }
  })

  }

}
