//Code by Yue Li 03/03/2017
var myapp = angular.module("app", []);

myapp.controller('ExtController',function($scope, $http){
	//Setup the default display group
	$scope.theGroup = "Indoor";
	
	//Create the list for selection
	$scope.toptions=[];

	$http.get('json/feature.json')
	.success(function (res) {
				 $scope.toptions=res;
             })
	.error(function(error) {
	  alert("Cannot read the feature.json");
    });
	
	// for(var i=0; i<30; i++){
		// $scope.toptions.push({
			// label: "In door feature "+i,
			// group: "Indoor", 
		// });
	// };
	
	// for(var i=0; i<20; i++){
		// $scope.toptions.push({
			// label: "Out door feature "+i,
			// group: "Outdoor", 
		// });
	// };
	
	// for(var i=0; i<10; i++){
		// $scope.toptions.push({
			// label: "Eco feature "+i,
			// group: "Eco", 
		// });
	// };
	
	//Create the container for storing selected items
	$scope.tselected=[];
	$scope.tempList1=[];
	$scope.tempList2=[];
	
	//Cereate button functions
	$scope.rightShift=function(){
		if($scope.tempList1.length > 0){
			for(var i = 0; i < $scope.tempList1.length; i++){
				$scope.tselected.push($scope.tempList1[i]);
			}
			$scope.removeSelectedAfterClick($scope.tempList1, $scope.toptions);
			//alert("The option length " + $scope.toptions.length + " The result length " + $scope.tselected.length + " The temp1 length " + $scope.tempList1.length);
		}
	};
	
	$scope.leftShift=function(){
		if($scope.tempList2.length > 0){
			for(var i = 0; i < $scope.tempList2.length; i++){
				$scope.toptions.push($scope.tempList2[i]);
			}
			$scope.removeSelectedAfterClick($scope.tempList2, $scope.tselected);
			//alert("The option length " + $scope.toptions.length + " The result length " + $scope.tselected.length + " The temp2 length " + $scope.tempList2.length);
		}
	};
	
	//remove elements from srcgetList against cacheList
	$scope.removeSelectedAfterClick=function(cacheList, srcgetList){
		for(var i=0; i<srcgetList.length; i++){
			for (var j=0; j<cacheList.length; j++){
				if (cacheList[j]===srcgetList[i]){
					srcgetList.splice(i, 1);
					--i;
					break;
				}
			}
		}
		cacheList.length=0;
		
	};
	
	//Create function for group select button
	$scope.getIndoor=function(){
		$scope.theGroup = "Indoor";
		$scope.tempList1.length=0;
		$scope.tempList2.length=0;
	};
	
	$scope.getOutdoor=function(){
		$scope.theGroup = "Outdoor";
		$scope.tempList1.length=0;
		$scope.tempList2.length=0;
	};
	
	$scope.getEco=function(){
		$scope.theGroup = "Eco";
		$scope.tempList1.length=0;
		$scope.tempList2.length=0;
	};
	
});
