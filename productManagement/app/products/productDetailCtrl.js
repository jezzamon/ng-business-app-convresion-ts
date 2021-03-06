angular.module("productManagement")
    .controller("ProductDetailCtrl", 
        ["product",
        "productService",
        function(product, productService) {
            var vm = this;

            vm.product = product; // injected in from resolve prop

            vm.title = "Product Detail: " + vm.product.productName;

            vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
            if (vm.product.tags) {
                vm.product.tagList = vm.product.tags.toString();
            }
        }
    ]);
