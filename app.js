(function () {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });





  var gems = [
    {
      name: 'Awesome Multi-touch keyboard',
      price: 2,
      description: '. . .',
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        },
        {
          full: 'dodecahedron-03-full.jpg',
          thumb: 'dodecahedron-03-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this!",
          author: "joe@joe"
        },
        {
          stars: 1,
          body: "this product sucks",
          author: "tim@hater"
        }
      ],
      canPurchase: true,
      soldOut: true
    },
    {
      name: "Brom",
      price: 9.1,
      description: ". . .",
      reviews: [
        {
          stars: 5,
          body: "I love this!",
          author: "joe@joe"
        },
        {
          stars: 1,
          body: "this product sucks",
          author: "tim@hater"
        }
      ],
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        },
        {
          full: 'dodecahedron-03-full.jpg',
          thumb: 'dodecahedron-03-thumb.jpg'
        }
      ],
      canPurchase: true
    },
    {
      name: "Trom",
      price: 590,
      description: ". . .",
      reviews: [
        {
          stars: 5,
          body: "I love this!",
          author: "joe@joe"
        },
        {
          stars: 1,
          body: "this product sucks",
          author: "tim@hater"
        }
      ],
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        },
        {
          full: 'dodecahedron-03-full.jpg',
          thumb: 'dodecahedron-03-thumb.jpg'
        }
      ],
      canPurchase: true
    },
    {
      name: "Grom",
      price: 25,
      description: ". . .",
      reviews: [
        {
          stars: 5,
          body: "I love this!",
          author: "joe@joe"
        },
        {
          stars: 1,
          body: "this product sucks",
          author: "tim@hater"
        }
      ],
      images: [
        {
          full: 'dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'dodecahedron-02-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        },
        {
          full: 'dodecahedron-03-full.jpg',
          thumb: 'dodecahedron-03-thumb.jpg'
        }
      ],
      canPurchase: false
    }
  ];
})();
