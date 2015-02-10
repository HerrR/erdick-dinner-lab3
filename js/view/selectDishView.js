var SelectDishView = function(container, model) {
	var selectedDishType = "main dish";

	this.allDishes = container.find("#allDeezDishes");
	var allSelected = model.getAllDishes(selectedDishType);
	var returnstring = "";
	var numberOfDishes = allSelected.length;

	returnstring += "<div class='row offset' id='topDishRow'>";
	for(i = 0;i<numberOfDishes; i++){
		returnstring += "<div class='col-md-2'>";
		returnstring += "<img src='images/"+allSelected[i].image+"' class='img-thumbnail'>";
		returnstring += "</div>";
	}
	returnstring += "</div>";

	returnstring += "<div class='row offset'>";
	for(j = 0;j<numberOfDishes; j++){
		returnstring += "<div class='col-md-2' style='font-weight:bold;'>";
		returnstring += allSelected[j].name;
		returnstring += "</div>";
	}
	returnstring += "</div>";

	returnstring += "<div class='row offset'>";
	for(k = 0;k<numberOfDishes; k++){
		returnstring += "<div class='col-md-2' style='font-size:8pt;'>";
		returnstring += allSelected[k].description;
		returnstring += "</div>";
	}
	returnstring += "</div>";

	this.allDishes.html(returnstring);
}