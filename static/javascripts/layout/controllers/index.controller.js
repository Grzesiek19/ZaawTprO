/**
 * Created by slawek on 2015-04-18.
 */

(function(){
    'use strict';

    angular.module('application.layout.controllers').controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'Authentication', 'Posts', 'Snackbar'];

    function IndexController($scope, Authentication, Posts, Snackbar){
        var vm = this;

        vm.isAuthenticated = Authentication.isAuthenticated();
        vm.posts = [];

        activate();

        function activate(){
            Posts.all().then(postsSuccessFn, postsErrorFn);

            $scope.$on('post.created', function(event, post){

                vm.posts.unshift(post);
            });

            $scope.$on('post.created.error',function(){
                vm.posts.shift();
            });

            function postsSuccessFn(data, status, headers, config){
                console.log(data.data);
                vm.posts = data.data;
            }

            function postsErrorFn(data, status, headers, config){
                Snackbar.error(data.error);
            }
        }
    }
})();