 //ExampleView Object constructor
var ExampleView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.fullMenu = container.find("#fullMenu");

	model.addObserver(this);

	this.update = function(arg){
		this.numberOfGuests.html(model.getNumberOfGuests());

		var pendingDish = model.getPending();
		if(pendingDish != "none"){
			this.totalCost.html(model.getTotalMenuPrice() + model.getPriceOfDish(model.getDish(pendingDish)));
			document.getElementById("confirmDinner").disabled = true;
		} else {
			this.totalCost.html(model.getTotalMenuPrice());
			document.getElementById("confirmDinner").disabled = false;
		}
		this.fullMenu.html(generateMenuSummary());
	}

	var generateMenuSummary = function(){
		var menuObject = model.getFullMenu();
		var menuSummary = "";
		for(dish in menuObject){
			menuSummary += "<div class='row'>";
			menuSummary += "<div class='col-md-9'>"+menuObject[dish].name+"</div>";
			menuSummary += "<div class='col-md-2'>"+model.getPriceOfDish(menuObject[dish])+"</div>";
			menuSummary += "</div>";
		}

		var pendingDish = model.getPending();

		if(pendingDish != "none"){
			menuSummary += "<div class='row'>";
			menuSummary += "<div class='col-md-9'> Pending </div>";
			menuSummary += "<div class='col-md-2'>"+model.getPriceOfDish(model.getDish(pendingDish))+"</div>";
			menuSummary += "</div>";
		} else {
			menuSummary += "<div class='row'>";
			menuSummary += "<div class='col-md-9'> Pending </div>";
			menuSummary += "<div class='col-md-2'>0 </div>";
			menuSummary += "</div>";
		}
		return menuSummary;
	}

	this.fullMenu.html(generateMenuSummary());

	this.totalCost = container.find("#totalCost");
	this.totalCost.html(model.getTotalMenuPrice());
	
	this.numberOfGuests.html(model.getNumberOfGuests());

}