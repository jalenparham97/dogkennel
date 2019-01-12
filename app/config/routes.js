'use strict'

angular
  .module("app")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/home", {
        template: `
        <home></home>
        `
    })
    .otherwise({
        redirectTo: "/home"
    })
  }])