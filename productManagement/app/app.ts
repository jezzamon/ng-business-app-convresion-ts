import * as toastr from '../js/toastr';
import * as angular from '../js/angular-1.5.5.js';
import * as jquery from '../js/jquery.js';

console.log('hi there');
angular.module("productManagement", ["common.services",
    "ui.router",
    "ui.mask",
    "ui.bootstrap", //ui.bootstrap for dropdown calendar, radio buttons
    "angularCharts",
    "productResourceMock"
  ])

  .config(function($provide) {
    $provide.decorator("$exceptionHandler",
    ["$delegate",
      function($delegate) {
        return function(exception, cause) {
          exception.message = "Error. See devtools console \n Message: " + exception.message;
          $delegate(exception, cause);
          alert(exception.message);
          toastr.error(exception.message)
          
        };
      }])
  })



  .config(["$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "app/welcomeView.html"
        })
        // Products
        .state("productList", {
          url: "/products",
          templateUrl: "app/products/productListView.html",
          controller: "ProductListCtrl as vm"
        })
        .state("productEdit", {
          abstract: true, // flag to not activate 'productEdit' directly, only if nested States are activated
          url: "/products/edit/:productId",
          templateUrl: "app/products/productEditView.html",
          controller: "ProductEditCtrl as vm",
          resolve: {
            productResource: "productResource",

            product: function (productResource, $stateParams) {
              var productId = $stateParams.productId;
              return productResource.get({
                productId: productId
              }).$promise;
            }
          }
        })
        .state("productEdit.info", { // shares parent ctrlr ProductEditCtrl
          url: "/info",
          templateUrl: "app/products/productEditInfoView.html",
        })
        .state("productEdit.price", { // shares parent ctrlr ProductEditCtrl
          url: "/price",
          templateUrl: "app/products/productEditPriceView.html",
        })
        .state("productEdit.tags", { // shares parent ctrlr ProductEditCtrl
          url: "/tags",
          templateUrl: "app/products/productEditTagsView.html",
        })
        .state("productDetail", {
          url: "/products/:productId",
          templateUrl: "app/products/productDetailView.html",
          controller: "ProductDetailCtrl as vm",
          resolve: {
            productResource: "productResource",

            product: function (productResource, $stateParams) {
              var productId = $stateParams.productId;
              return productResource.get({
                productId: productId
              }).$promise;
            }
          }
        })
        .state("priceAnalytics", { // controller as doesn't work with charts library, inject $scope instead
          url: "/priceAnalytics",
          templateUrl: "app/prices/priceAnalyticsView.html",
          controller: "PriceAnalyticsCtrl", // "PriceAnalyticsCtrl as" as doesn't work with charts library, inject $scope instead
          resolve: {
            productResource: "productResource",

            products: function (productResource) {
              return productResource.query(function(response) {
                  // no code needed for success
              },
              function(response) {
                // code for failure 
                if (response.status === 404) { // if 404 not found
                  alert("Error accessing resource: " + 
                  // response.config.method + " " + response.config.url);
                  // toastr.error("Error accessing resource: " + 
                  response.config.method + " " + response.config.url)
                } else {
                  alert(response.statusText);
                }
              }).$promise;

            }
          }
        })

    }
  ]);

  console.log()