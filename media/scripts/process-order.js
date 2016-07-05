// When the order is confirmed, create the cookies
$("#orderForm").submit(function(event) {
	// Set Order Selections
	document.cookie = "entrees=" + entrees + " ; path=/; domain=.expressorder.brpromedia.com";
	document.cookie = "fruitsVegetables1=" + fruitsVegetablesArray[0] + "; path=/; domain=.expressorder.brpromedia.com";
	if (fruitsVegetablesArray[1] != null) {
		document.cookie = "fruitsVegetables2=" + fruitsVegetablesArray[1] + "; path=/; domain=.expressorder.brpromedia.com";
	}
	document.cookie = "beverages=" + beverages + "; path=/; domain=.expressorder.brpromedia.com";

	// Disable Orders
	document.cookie = "orderDisabled=true; path=/; domain=.expressorder.brpromedia.com";
	
	// Go to Order Placed page
	event.preventDefault();
	window.location = "http://expressorder.brpromedia.com/order-placed/";
});