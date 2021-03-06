/**
 * Created by slawek on 2015-05-09.
 */



(function () {
    'use strict';

    angular.module('application.products.controllers').controller('productPage', productPage);

    productPage.$inject = ['$scope', '$sce', 'ProductService', '$routeParams', 'Utileeer'];

    function productPage($scope, $sce, ProductService, $routeParams, Utileeer) {
        var vm = this;
        vm.isNotEmpty = Utileeer.isNotEmpty;

        var basic = {
            name: "burger",
            pictures: [],
            shortDesc: "kotlet z pierzynką",
            price: 100,
            uniqueName: 'uniqueName',
            detailDesc: [{url: 'temp.html'}]
        };

        activate();
        //ProductService.getProduct()
        function activate() {
            var name = $routeParams.productName;
            ProductService.getProduct(name).then(successGetProduct, failGetProduct);
        }

        vm.quantity = 1;
        vm.basic = basic;
        vm.examples = 'example';


        function successGetProduct(data, status, headers, config) {
            vm.basic = data.data;
            vm.examples = vm.basic;
            concatSpecification()
        }

        function concatSpecification() {
            var allSpecification = {};
            for (var tab in vm.basic.productSpecification) {
                jQuery.extend(allSpecification, vm.basic.productSpecification[tab].token[0].fields);
            }

            vm.basic.allSpecification = allSpecification;
        }


        function failGetProduct(data, status, headers, config) {
            vm.examples = data;
        }
    }
})();