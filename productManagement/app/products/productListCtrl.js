/**
 * Created by Deb on 8/20/2014.
 */

angular
    .module("productManagement")
    .controller("ProductListCtrl",
      ["productResource",
      function (productResource) {
          var vm = this;
  
          productResource.query(function(data) {
            vm.products = data;
          });
          vm.showImage = false;
  
          vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
          }
}]);

