/*   Initialize class Product   */

var Product = function(name, price, weight) {
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.finalPrice = function() {
        return (this.price * this.weight);
    }
};

var products = [];

var listLength = document.getElementsByTagName('li').length;

/*   Function buy Product   */

function buyProduct() {
    for(var i = 0; i < listLength; i++) {
        var name = document.getElementsByClassName('item_name')[i].innerHTML;
        var price = document.getElementsByClassName('item_price')[i].innerHTML;
        var weight = document.getElementsByClassName('item_weight')[i].value;
        price = parseFloat(price);
        weight = parseFloat(weight);

        var newProduct = new Product(name, price, weight);

        if(!isNaN(weight)) {
            products.push(newProduct);
        }
        document.getElementsByClassName('item_weight')[i].value =  '';
    }



    /*   Push products that have been bought to Basket   */

    var basket = document.getElementById('basket_list');

    for (var i = 0; i < products.length; i++) {
        var item = document.createElement('div');
        var item_name = document.createElement('h4');
        var item_price = document.createElement('p');
        item_name.appendChild(document.createTextNode(products[i].name));
        item_price.appendChild(document.createTextNode('Price: ' + products[i].finalPrice().toFixed(2) + '$'));
        item.appendChild(item_name);
        item.appendChild(item_price);
    }
    basket.appendChild(item);

    /*   Calculate total price our products   */

    var productsPrice = [];
    products.map(item => {productsPrice.push(item.finalPrice())});
    var sumPrice = productsPrice.reduce((a,b)=>{return a+b;});

    var totalPrice = document.createElement('div');
    totalPrice.appendChild(document.createTextNode('Total price: ' + sumPrice.toFixed(2) + '$'));
    basket.appendChild(totalPrice);
};






