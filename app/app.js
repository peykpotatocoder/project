var myApp = angular.module('myApp', []);


myApp.controller('myController', function($scope){


$scope.removeitem = function(item){
	var removeitem = $scope.items.indexOf(item);
		$scope.items.splice(removeitem,1)
}

$scope.add_cart = function(product){ //set a function name add_cart
					var myCart = JSON.parse(localStorage.getItem("carts"))
					if(product){ //check if the product is already declared within the function
						myCart.push(product);
						localStorage.setItem("carts", JSON.stringify(myCart))
						location.reload()
					}	
				}

$scope.cart_items = JSON.parse(localStorage.getItem("carts"))

function getTotprice(){
	var item = JSON.parse(localStorage.getItem("carts"));
	var mytot = 0;
	for (let i = 0;i<item.length; i++ ) {
		mytot +=item[i].price;
	}
	return mytot;
}

$scope.total = getTotprice();


$scope.setTotals = function(cart){  
					if(cart){ 
						$scope.total += cart.price; 
					}
				}


$scope.remove_cart = function(cart){ 
					if(cart){ 
						$scope.carts.splice($scope.carts.indexOf(cart), 1);  
						$scope.total -= cart.price; 
					}
				}


$scope.items = [

{
	name: "Samsung galaxy S7",
	price: 20000,	
	image: "img/1.png"
	
},
{
	name: "Iphone 8",
	price: 10000,
	image: "img/2.png"
	
},
{
	name:"Sony Xperia",
	price: 5000,	
	image: "img/3.png"
	
},
{
	name:"Motorola Moto G4",
	price: 10000,	
	image: "img/6.png"
	
}

];

localStorage.setItem("products", JSON.stringify($scope.items))


});


if (localStorage.getItem("carts")===null){
	localStorage.setItem("carts", JSON.stringify([]))
}