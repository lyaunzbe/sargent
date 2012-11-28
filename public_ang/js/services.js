'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('sargent.services', ['ngResource']).factory('githubClient', function($resource){
  return $resource('/api/clientID');
});
 
