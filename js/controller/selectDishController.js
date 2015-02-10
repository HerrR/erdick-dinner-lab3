var SelectDishController = function(view, model ) {
	view.dropdownAppetizer.click(function(){
		console.log("Appetizers");
		// model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.dropdownMainCourse.click(function(){
		console.log("Main Course");
		// model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
	
	view.dropdownDessert.click(function(){
		console.log("Dessert");
		// model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});

	
}