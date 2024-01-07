var $ = function (id) {
    return document.getElementById(id); 
};
var processEntries = function () {
	// get user entries
	var subtotal = parseFloat( $("subtotal").value );
    var taxRate  = parseFloat( $("tax_rate").value );
    var isValid = true;
	
	// calculate and display results
	if ( isNaN(subtotal) || subtotal <=0 || subtotal >= 10000 ) {
		alert("Subtotal must be > 0 and < 10000");
	} 
	else if ( isNaN(taxRate) || taxRate <=0 ) {
        alert("Tax Rate Must be > 0");
	}
	else {
		var salesTax = subtotal * (taxRate / 100);
		salesTax = parseFloat( salesTax.toFixed(2) );
		var total = subtotal + salesTax;
		
		// display results
	    $("sales_tax").value = salesTax;
	    $("total").value = total.toFixed(2);
	}
	    
    // move focus
    $("subtotal").focus();
};
var clearEntries = function () {
	// clear all text boxes
	$("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    
	// move focus
    $("subtotal").focus();
};
var clearSubtotal = function () {
	$("subtotal").value = "";
};
var clearRate = function () {
	$("tax_rate").value = "";
};
window.onload = function () {
	$("calculate").onclick = processEntries;
	$("clear").onclick = clearEntries;
	$("subtotal").onclick = clearSubtotal;
	$("tax_rate").onclick = clearRate;
	$("subtotal").focus();
};
