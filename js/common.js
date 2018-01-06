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
    console.info(products);
};


