var Product = function(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.finalPrice = function() {
        return (this.price * this.weight);
    }
};

// var storeList = document.getElementById('store_list');

//
// storeList.addEventListener('click', function(e){
//     var el = e.target;
//     while (el && el.tagName !== 'LI') {
//         el = el.parentNode
//     }
//
// }, false);

var products = [];

var listLength = document.getElementsByTagName('li').length;

function buyProduct() {
   for(var i = 0; i < listLength; i++) {
       var name = document.getElementsByClassName('item_name')[i].innerHTML;
       var price = document.getElementsByClassName('item_price')[i].innerHTML;
       price = parseFloat(price);
       var weight = document.getElementsByClassName('item_weight')[i].value;
       weight = parseFloat(weight);
       var newProduct = new Product(name, price, weight);
       products.push(newProduct);
       console.log(products);
   }
};