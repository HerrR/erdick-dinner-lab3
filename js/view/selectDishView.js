var SelectDishView = function(container, model) {
	var selectedDishType = "main dish";

	this.allDishes = container.find("#allDeezDishes");
	this.dropdownAppetizer = container.find("#dropdownAppetizer");
	this.dropdownMainCourse = container.find("#dropdownMainCourse");
	this.dropdownDessert = container.find("#dropdownDessert");

	// model.addObserver(this);

	$.fn.testing = function(id) {
		model.addPending(id);
		$("#selectDishView").hide();
		$("#rightPanel").hide();
		$("#dishDetailView").show();
		$("#dishIngredientView").show();
	};

	var generateAllDishes = function(dishType){
	
		var allSelected = model.getAllDishes(dishType);
		var returnstring = "";
		var numberOfDishes = allSelected.length;

		returnstring += "<div class='row offset' id='topDishRow'>";
		for(var i = 0;i<numberOfDishes; i++){
			returnstring += "<div class='col-md-3'>";
			returnstring += "<div id='dishImage' onclick='$(this).testing("+allSelected[i].id+")'>";
			returnstring += "<img src='images/"+allSelected[i].image+"' class='img-thumbnail'>";
			returnstring += "</div>";
			returnstring += "<div style='font-weight:bold'>"+allSelected[i].name+"</div>";
			returnstring += allSelected[i].description;
			returnstring += "</div>";
		}
		returnstring += "</div>";

		return returnstring;
	};

	// this.allDishes.html(generateAllDishes(selectedDishType));
	// this.consolePrint = function(toBePrinted){
	// 	return console.log(toBePrinted);
	// }

	this.updateDishView = function(dishType){
		this.allDishes.html(generateAllDishes(dishType));
		// this.consolePrint("Halloj");
	};

	this.updateDishView(selectedDishType);
	// this.dishImage = container.find("#dishImage");
};