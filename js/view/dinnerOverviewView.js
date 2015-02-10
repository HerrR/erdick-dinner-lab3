var DinnerOverviewView = function (container, model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	var fullMenu = model.getFullMenu();

	this.imageRow = container.find("#imageRow");
	this.nameRow = container.find("#nameRow");
	this.priceRow = container.find("#priceRow");

	var imageRowString = "";
	var nameRowString = "";
	var priceRowString = "";

	for(dish in fullMenu){
		imageRowString += "<div class='col-md-2 col-md-offset-1'>";
		imageRowString += "<img src='images/"+fullMenu[dish].image+"'>";
		imageRowString += "</div>";

		nameRowString += "<div class='col-md-2 col-md-offset-1'>";
		nameRowString += fullMenu[dish].name;
		nameRowString += "</div>";

		priceRowString += "<div class='col-md-2 col-md-offset-1'>";
		priceRowString += model.getPriceOfDish(fullMenu[dish]) + " SEK";
		priceRowString += "</div>";
	}

	nameRowString += "<div class='col-md-2 col-md-offset-1'> Total </div>";
	priceRowString += "<div class='col-md-2 col-md-offset-1'>"+model.getTotalMenuPrice() + " SEK";
	
	this.imageRow.html(imageRowString);
	this.nameRow.html(nameRowString);
	this.priceRow.html(priceRowString);
}