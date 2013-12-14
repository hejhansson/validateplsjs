/*
*
* Validatepls.js
* @author Alexander Hansson
* @twitter @hejhansson
* @URI http://alxndr.se
* @version 0.1
*
* All you need is to include this file, the inputs you want to validate
* need a class called "validatepls" to be validated, the form needs
* either a input with the type submit or button and the input need a placeholder. 
* The placeholder is added to the error message for better user experience. 
* Currently supporting input with the type: text, password, checkbox, submit, button or textarea.
*
*/

// Change this to whatever the passwords length need to be.
var numberOfCharsInPassword = 8;

// If "false" errors are alerted. If "true" the errors are saved in a var called "t" - which you can do whatever you want with.
var noAlert = false;

(function() {
	el = document.getElementsByTagName("input");

	for (i = 0; i < el.length; i++) {
		if (el[i].type == "submit" || el[i].type == "button") {
			el[i].onclick = function() {return formjs();}
		}
	}
})();

function formjs() {

	var er = "";

	for (i = 0; i < el.length; i++) {

				if (el[i].type == "password" && el[i].className == "validatepls") {

					if (el[i].value.length <= numberOfCharsInPassword) {
						var p = (numberOfCharsInPassword - el[i].value.length);
						var attr = el[i].getAttribute("placeholder").toLowerCase();
						er += "Your " + attr + " got to be longer than " + numberOfCharsInPassword + " chars. " + p + " chars missing.\n";
					}
				}

				if (el[i].type == "text" && el[i].className == "validatepls") {

					if (el[i].value == "") {
						var attr = el[i].getAttribute("placeholder").toLowerCase();
						er += "The " + attr + " needs to be filled out.\n";
					}
				}

				if (el[i].type == "checkbox" && el[i].className == "validatepls") {

					if (el[i].checked == false) {
						var attr = el[i].getAttribute("placeholder").toLowerCase();
						er += "Checkbox needs to be checked.\n";
					}
				}

				if (el[i].type == "textarea" && el[i].className == "validatepls") {

					if (el[i].value == "") {
						var attr = el[i].getAttribute("placeholder").toLowerCase();
						er += "The " + attr + " area needs to be filled out.\n";
					}
				}				
			}

		if (!noAlert) {

			if (er != "") {
				alert(er);
				return false;
			}

			else {
				return true;
			}
		}

		else {

			if (er != "") {
				var t = document.createTextNode(er);
				return false;
			}

			else {
				return true;
			}	
		}
}
