var landingpage = angular.module('landingpage');

landingpage.factory('BallotizeFactory', ['$http', '$state', function($http, $state){
  var code = '';
  var user = '';

  var setUser = function(username){
    return user = username;
  }

  var getUser = function(){
    return user;
  }

  var setCode = function(input){
    return code = input;
  }

  var getCode = function(){
    return code;
  }

  var getBallot = function(input, username){
    $http({
       method: 'GET',
       url: '/ballot',
       params: {
         code: input,
         username: username
       }
     }).then(function success(response){
       console.log('success',response)
       $state.go('uservote');
     }, function error(response){
       console.log('error',response);
     });
  }

  return {
    setUser: setUser,
    getUser: getUser,
    setCode: setCode,
    getCode: getCode,
    getBallot: getBallot
  }
}]);
