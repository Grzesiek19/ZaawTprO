(function(){
    'use strict';


    angular.module('application',
        ['application.config',
        'application.routes',
        'application.authentication',
        'application.layout',
            'application.picture',
        'application.posts',
            'application.products',
        'application.profiles',
        'application.utils']).run(run);
    angular.module('application.routes', ['ngRoute']);
    angular.module('application.config',[]);

    run.$inject = ['$http'];

    function run($http){
        $http.defaults.xsrfHeaderName='X-CSRFToken';
        $http.defaults.xsrfCookieName='csrftoken';
    }
})();