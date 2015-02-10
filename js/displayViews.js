$("#backToEdit").click(function(){
    $("#dinnerOverviewView").hide();
});

$("#toNewDinner").click(function(){
    $("#divOfStartscreenness").hide();
    $("#exampleView").show();
    $(".mainHeader").show();
    $("#selectDishView").show();
});

$("#confirmDinner").click(function(){
    $("#exampleView").hide();
    $("#selectDish").hide();
    $("#dinnerOverviewView").show();

});

$(".backToEdit").click(function(){
	$("#dinnerOverviewView").hide();
    $("#dinnerPreparationView").hide();
    $("#exampleView").show();
    $("#selectDish").show();
});

$("#printRecipe").click(function(){
    $("#dinnerOverviewView").hide();
    $("#dinnerPreparationView").show();

});

$("h1").click(function(){
	$("#dinnerOverviewView").hide();
    $("#dinnerPreparationView").hide();
    $("#exampleView").hide();
    $("#selectDish").hide();
    $(".mainHeader").hide();
    $("#divOfStartscreenness").show();
});

$("dishImage").click(function(){
    $("#rightPanel").hide();
});