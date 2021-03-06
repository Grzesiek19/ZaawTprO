/**
 * Created by slawek on 2015-04-12.
 */
(function () {
    'user strict';

    var RoutesApp = angular.module('application.routes');
    RoutesApp.config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.when('/register', {
            controller: 'RegisterController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/login.html'

        }).when('/+:username', {
            controller: 'ProfileController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/profiles/profile.html'
            /*    }).when('/productShow', { stare pokazywanie wszystkich produktów raczej do kosza
             controller: 'ProductsController',
             controllerAs: 'vm',
             templateUrl: '/static/templates/temporary/productShow.html'*/
            /*  }).when('/', { stary index raczej do kosza
            controller: 'IndexController',
            controllerAs: 'vm',
             templateUrl: '/static/templates/layout/index.html'*/
        }).when('/+:username/settings', {
            controller: 'ProfileSettingsController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/profiles/settings.html'
        }).when('/product/:productName', {
            controller: 'productPage',
            controllerAs: 'vm',
            templateUrl: '/static/templates/products/productPage.html'
        }).when('/category/:categoryName', {
            controller: 'ProductsController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/temporary/productShow.html'
        }).when('/', {
            controller: 'ProductsController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/temporary/productShow.html'
        }).otherwise('/');
    }
})();