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

function buyProduct() {
    var storeList = document.getElementById('store_list');
    storeList.addEventListener('click', function(e){
        var el = e.target;
        while (el && el.tagName !== 'LI') {
            el = el.parentNode
        }
        var name = document.getElementsByClassName('item_name')[0].innerHTML;
        var price = document.getElementsByClassName('item_price')[0].innerHTML;
        price = parseFloat(price);
        var weight = document.getElementsByClassName('item_weight')[0].value;
        weight = parseFloat(weight);
        var newProduct = new Product(name, price, weight);
        products.push(newProduct);
        console.log(products);
    }, false);

};