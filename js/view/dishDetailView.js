 //DishDetailView Object constructor
var DishDetailView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
 	model.addObserver(this);

 	var dishID = model.getPending();
	this.dishName = container.find("#nameOfDish");
	this.dishName.html(model.getDish(dishID).name);

	this.dishPic = container.find("#dishImg");
	this.dishPic.html("<img src='images/"+model.getDish(dishID).image+"' width='350px' class='img-thumbnail'>");

	this.dishDescription = container.find("#dishDesc");
	this.dishDescription.html(model.getDish(dishID).description);
	
	this.update = function(arg){
		dishID = model.getPending();
		this.dishName.html(model.getDish(dishID).name);
		this.dishPic.html("<img src='images/"+model.getDish(dishID).image+"' width='350px' class='img-thumbnail'>");
		this.dishDescription.html(model.getDish(dishID).description);
	}
}