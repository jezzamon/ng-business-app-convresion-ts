angular.module("productManagement")
  .controller(
    "PriceAnalyticsCtrl",
    ["$scope",
    "$filter",
    "products",
    "productService",
    function($scope, $filter, products, productService) {
      
      $scope.title="Price Analytics";

      // Compute Property and add to products model
      for (var i=0; i < products.length; i++) {
        products[i].marginPercent = 
          productService.calculateMarginPercent(products[i].price, products[i].cost);
      
        products[i].marginAmount =
          productService.calculateMarginAmount(products[i].price, products[i].cost);
      }

      // use filter to order products model by margin amount
      var orderedProductsAmount = $filter("orderBy") (products, "marginAmount");

      // use filter to limit products model by 5
      var filteredProductsAmount = $filter("limitTo") (orderedProductsAmount, 5);

      var chartDataAmount = [];
      for (var i = 0; i < filteredProductsAmount.length; i++) {
        chartDataAmount.push({
          x: filteredProductsAmount[i].productName,
          y: [filteredProductsAmount[i].cost,
              filteredProductsAmount[i].price,
              filteredProductsAmount[i].marginAmount]
        });
      }

      $scope.dataAmount = {
        series: ["Cost", "Price", "MarginAmount"],
        data: chartDataAmount
      };

      // Configuration info for angular charts : Amount
      $scope.configAmount = {
        title: "Top $ Margin Products",
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
          display: true,
          position: "right"
        }
      };



      var orderedProductsPercent = $filter("orderBy") (products, "marginPercent");
      var filteredProductsPercent = $filter("limitTo") (orderedProductsPercent, 5);

      var chartDataPercent = [];
      
      for (var i = 0; i < filteredProductsPercent.length; i++) {
        chartDataPercent.push({
          x: filteredProductsPercent[i].productName,
          y: [filteredProductsAmount[i].marginPercent]
        });
      }

      $scope.dataPercent = {
        series: ["Margin %"],
        data: chartDataPercent
      };

      // Configuration info for angular charts : Percent
      $scope.configPercent = {
        title: "Top % Margin Products",
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
          display: true,
          position: "right"
        }
      };


  }]);
