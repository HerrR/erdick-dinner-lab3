var SelectDishController = function(view, model ) {
	view.dropdownAppetizer.click(function(){
		view.updateDishView('starter');
		view.updateDishTypeSelected('Appetizer');
		view.setSelected('starter');
	});
	
	view.dropdownMainCourse.click(function(){
		view.updateDishView('main dish');
		view.updateDishTypeSelected('Main Course');
		view.setSelected('main dish');
	});
	
	view.dropdownDessert.click(function(){
		view.updateDishView('dessert');
		view.updateDishTypeSelected('Dessert');
		view.setSelected('dessert');
	});

	view.searchButton.click(function(){
		view.searchDishes();
	})

}