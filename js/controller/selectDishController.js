var SelectDishController = function(view, model ) {
	view.dropdownAppetizer.click(function(){
		view.updateDishView('starter');
	});
	
	view.dropdownMainCourse.click(function(){
		view.updateDishView('main dish');
	});
	
	view.dropdownDessert.click(function(){
		view.updateDishView('dessert');
	});

	// view.dishImage.click(function(){
	// 	console.log("mjao");
	// });

}