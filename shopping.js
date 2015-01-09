var app = angular.module("shoppingListApp",[]);

app.controller('shopCtrl', function($scope) {

	$scope.newItemName = "";
	$scope.newItemQuantity = "";
	$scope.newItemImage = "";

	$scope.list = [
		{
			item: "Chicken",
			quantity: 2,
			image:"http://www.newhealthguide.org/images/10436128/image001.jpg",
			bought: false
		},
		{
			item: "Brocolli",
			quantity: 1,
			image: "http://superfoodlists.com/wp-content/uploads/2013/01/broccoli.jpg",
			bought: false
		},
		{
			item: "Spam",
			quantity: 5,
			image: "http://www.todayifoundout.com/wp-content/uploads/2010/09/spam5.jpg",
			bought: false
		},
		{
			item: "Blue Moon",
			quantity: 36,
			image: "http://www.refinedguy.com/wp-content/uploads/2013/03/blue-moon-craft-beers-that-arent-craft-beers-fake-craft-beers.jpg",
			bought: false
		}
	];

	$scope.addNewItem = function() {
		if($scope.newItemName != "" && $scope.newItemQuantity != "" && $scope.newItemImage != "") {
			$scope.list.push({
				item:$scope.newItemName,
				quantity:$scope.newItemQuantity,
				image:$scope.newItemImage,
				bought:false});
			$scope.newItemName = "";
			$scope.newItemQuantity = "";
			$scope.newItemImage = "";
		} else {
			alert("Please fill out the form")
		}
	};

	$scope.boughtItem = function () {
		var goneItem = $scope.list;
		$scope.list = [];
		angular.forEach(goneItem, function(item) {
			if(!item.bought) {
				$scope.list.push(item);
			}
		})
	};

	$scope.remainingItems = function() {
		var remaining = $scope.list.length;
		angular.forEach($scope.list, function(item) {
			if(item.bought){
				remaining--
			}
		});
	return remaining;
	}
});