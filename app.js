(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: '. . .',
      canPurchase: true,
      soldOut: true
    },
    {
      name: "Brom",
      price: 9.1,
      description: ". . .",
      canPurchase: true
    },
    {
      name: "Trom",
      price: 590,
      description: ". . .",
      canPurchase: true
    },
    {
      name: "Grom",
      price: 25,
      description: ". . .",
      canPurchase: false
    }
  ]
})();
