var SelectDishView = function(container, model) {
	var selectedDishType = "main dish";

	this.allDishes = container.find("#allDeezDishes");
	this.dropdownAppetizer = container.find("#dropdownAppetizer");
	this.dropdownMainCourse = container.find("#dropdownMainCourse");
	this.dropdownDessert = container.find("#dropdownDessert");
	
	var generateAllDishes = function(dishType){
	
		var allSelected = model.getAllDishes(dishType);
		var returnstring = "";
		var numberOfDishes = allSelected.length;

		returnstring += "<div class='row offset' id='topDishRow'>";
		for(var i = 0;i<numberOfDishes; i++){
			returnstring += "<div class='col-md-3'>";
			returnstring += "<img src='images/"+allSelected[i].image+"' class='img-thumbnail' id='dishImage'>";
			returnstring += "<div style='font-weight:bold'>"+allSelected[i].name+"</div>";
			returnstring += allSelected[i].description;
			returnstring += "</div>";
		}
		returnstring += "</div>";

		// returnstring += "<div class='row offset'>";
		// for(var j = 0;j<numberOfDishes; j++){
		// 	returnstring += "<div class='col-md-2' style='font-weight:bold;'>";
		// 	returnstring += allSelected[j].name;
		// 	returnstring += "</div>";
		// }
		// returnstring += "</div>";

		// returnstring += "<div class='row offset'>";
		// for(var k = 0;k<numberOfDishes; k++){
		// 	returnstring += "<div class='col-md-2' style='font-size:8pt;'>";
		// 	returnstring += allSelected[k].description;
		// 	returnstring += "</div>";
		// }
		// returnstring += "</div>";

		return returnstring;
	}

	// this.allDishes.html(generateAllDishes(selectedDishType));
	
	this.updateDishView = function(dishType){
		this.allDishes.html(generateAllDishes(dishType));
	}

	this.updateDishView(selectedDishType);
	// this.update = function(arg){
	// 	console.log(arg);
	// 	this.allDishes.html(generateAllDishes('dessert'));
	// }

	
}