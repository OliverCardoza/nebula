var nebula = angular.module('nebula', []);

nebula.controller("NebulaController", ["$scope",
  function ($scope) {
    $scope.products = [
      {
        name: "Western Digital 4 TB Red",
        links: [{
          merchant: "CanadaComputers",
          price: "174",
          url: "http://www.canadacomputers.com/product_info.php?cPath=15_1086_210_212&item_id=063680"
        }, {
          merchant: "newegg.ca",
          price: "210",
          url: "http://www.newegg.ca/Product/Product.aspx?Item=N82E16822236599&cm_re=WD40EFRX-_-22-236-599-_-Product"
        }]
      },
      {
        name: "Western Digital 5 TB Red",
        links: []
      }
    ];

    $scope.addProduct = function() {
      $scope.products.push({
        name: $scope.product
      });
      $scope.product = "";
    };

    $scope.deleteProduct = function(product) {
      var confirmDelete = confirm("Are you sure? (yes=OK, no=Cancel)");
      if (confirmDelete) {
        $scope.products.splice($scope.products.indexOf(product), 1);
      }
    }

    $scope.addProductLink = function(product) {
      if (product.newUrl === undefined) {
        alert("invalid url");
      }
      try {
        merchantDomain = new URL(product.newUrl).host;
      } catch (err) {
        merchantDomain = product.newUrl.substring(0, Math.min(15, product.newUrl.length));
      }
      product.links.push({
        merchant: merchantDomain,
        price: "150",
        url: product.newUrl
      })
      product.newUrl = "";
      console.log("TODO addProductLink(): send out link");
    };
  }]);
