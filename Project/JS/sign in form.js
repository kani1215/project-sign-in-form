function validate() {  
	var result = "";	
	result += validatefName();
	result += validatelName();
	result += validateNumber(); 
	result += validateEmail();
	result += validatePassword();
	result += validateTerms();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}	

function validatefName() {
	var fname = document.getElementsByName("first")[0].value;
	if (fname.length <= 3)
		return "First Name should be at least three characters.\n";	
	return "";
}

function validatelName() {
	var lname = document.getElementById("last").value;
	if (lname.length <= 3)
	 	return "Last Name should be at least three characters.\n";	
	return "";
}

function validateNumber() {
	var num = document.getElementById("number").value;
	if (num.length < 10 || num.length > 10)
		return "Number length should be ten numbers.\n";
	return "";
}

function validatePassword() {
	var password = valueOf("pass");
	var retype = valueOf("retypepass");
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
	if (password != retype) 
		return "Passwords do not match.\n";	
	return "";
}

function validateEmail() {
	var email = valueOf("email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	return "";	
}

function validateTerms() {
	var terms = document.getElementsByName("terms")[0];
	if (!terms.checked)
		return "Please accept the Terms Service and Privacy Policy";	
	return "";
}

function valueOf(fname) {
	return document.getElementsByName(fname)[0].value;
}