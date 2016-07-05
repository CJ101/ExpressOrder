// When the order is confirmed, create the cookies
$("#orderForm").submit(function(event) {
	// Set Order Selections
	document.cookie = "entrees=" + entrees + " ; path=/;";
	document.cookie = "fruitsVegetables1=" + fruitsVegetablesArray[0] + "; path=/;";
	if (fruitsVegetablesArray[1] != null) {
		document.cookie = "fruitsVegetables2=" + fruitsVegetablesArray[1] + "; path=/;";
	}
	document.cookie = "beverages=" + beverages + "; path=/;";

	// Disable Orders
	document.cookie = "orderDisabled=true; path=/;";
	
	// Go to Order Placed page
	event.preventDefault();
	window.location = "http://10.254.17.169:8082/order-placed/";
});