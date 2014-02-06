$(document).ready(function() {
	
	var nameFromStorage = '';
	
	// check if the storedName is in localStorage. If it is, show the name, if not show the forms
	if(localStorage.getItem('storedName') != null){
		nameFromStorage = localStorage.getItem('storedName');
		$(".formResult h1").prepend(nameFromStorage + " ");
		$(".formShow").hide();
		$(".formResult").show();
	}
	
	// process form button
	$(".submitButton").on("click",function(event){ 
		localStorage.setItem('storedName', $("#nameField").val());
		window.location.href = "persist.html";
	});
});