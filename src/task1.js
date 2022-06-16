let order = {
    items : [
    {
    id: 248,
    type: 'shoes',
    name: 'Puma RS-X',
    quantity: '3',
    originalPrice: '120.00' // total sum
    }, {
    id: 220,
    type: 'shoes',
    name: 'The Nike Monarch',
    quantity: '1',
    originalPrice: '87.50',
    salePrice: '51.99'
    }, {
    id: 231,
    type: 'shoes',
    name: 'Nike Air Max Plus',
    quantity: '4',
    originalPrice: '187.50',
    salePrice: '151.99'
    }, {
    id: 389,
    type: 'clothing',
    name: 'Puma T-shirt',
    quantity: '1',
    originalPrice: '15.99'
    }, {
    id: 451,
    type: 'accessories',
    name: 'Watches TISSOT',
    quantity: '5',
    originalPrice: '99.50',
    salePrice: '89.99'
    }
    ],
    shipping : {
    id: 'shipping1',
    name: 'US Delivery',
    originalPrice: '11.00'
    }
};

function calculateCostByType(type) {
   let cost = 0;

   order.items.forEach((product) => {
     if( product.type === type ) {
      cost += +product.originalPrice;          
     }
   });

   return cost; 
}

function calculateOriginalOrderAmount() {
   let cost = 0;

   order.items.forEach((product) => {
         cost += +product.originalPrice;
   });

   return cost;  
}

function discount(orderAmountAfterDiscount) {
   let discountPercentage = 13; 
   return orderAmountAfterDiscount = orderAmount * discountPercentage / 100;
}

function calculateFinalCost() {
   let orderAmountBeforeDiscount = calculateOriginalOrderAmount();
   let shippingCost = orderAmountBeforeDiscount > 100 ? 0 : order.shipping.originalPrice;
   return order.items.length >= 20 ?
          discount(orderAmountBeforeDiscount) - shippingCost :
          orderAmountBeforeDiscount - shippingCost;
}

function findOutProductByRegexp(name) {
   let numberOfProducts = 0;
   let productNameRegExp = new RegExp(`\\s${name}\\s`);

   order.items.forEach((product) => {
      if(productNameRegExp.test(product.name)) {
        numberOfProducts++;         
      }
   });

   return numberOfProducts;
}

function isProductInOrder(id) {
   let result = order.items.find((item) => {
    return item.id === id;
   });

   return typeof result === 'object';
} 

console.log(calculateCostByType('shoes'));
console.log(calculateCostByType('clothing'));
console.log(calculateOriginalOrderAmount());
console.log(calculateFinalCost());
console.log(isProductInOrder(231));
console.log(isProductInOrder(451));
console.log(isProductInOrder(2));
console.log(findOutProductByRegexp('Puma'));
console.log(findOutProductByRegexp('Nike'));
console.log(findOutProductByRegexp('Adidas'));