function makeName() {
	// This is scanning the document for the variable with that id and storing each value
    const month = document.getElementById("month").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;
   	// This is storing values for the variables but making it so that the value can change
   	let firstName="";
   	let secondName="";
   	let thirdName="";



// this is changing the first name variable based off of the month the user inputs
    if (month=="January") {
    	firstName="strawberry"
    }

    else if (month=="February") {
    	firstName="blueberry"
    }

    else if (month=="March") {
    	firstName="pineapple"
    }

    else if (month=="April") {
    	firstName="pomegranate"
    }

    else if (month=="May") {
    	firstName="grape"
    }

    else if (month=="June") {
    	firstName="watermelon"
    }

    else if (month=="July") {
    	firstName="dragonfruit"
    }

    else if (month=="August") {
    	firstName="mango"
    }

    else if (month=="September") {
    	firstName="melon"
    }

    else if (month=="October") {
    	firstName="apple"
    }

    else if (month=="November"){
    	firstName="banana"
    }

    else if (month=="December") {
    	firstName="raspberry"
    }

    else{
    	alert("That is not a month. Try again. (make sure first letter is capitalized)")
    }

// this is changing the second name variable based off of the age the user inputs

    if (age > 0 && age <10) {
    	secondName="princess"
    }

    else if (age > 10 && age <20) {
    	secondName="prince"
    }

    else if (age > 20 && age <100) {
    	secondName="king"
    }

    else {
    	alert("That is not your actual age. Try again.")

    }
// this is changing the third name variable based off of the color the user inputs
    if (color == "pink"){
    	thirdName= "of Paris"
    }

    else if (color == "purple"){
    	thirdName= "of Paris"
    }

    else if (color == "blue"){
    	thirdName= "of Paris"
    }

    else if (color == "green"){
    	thirdName= "of Paris"
    }

    else if (color == "yellow"){
    	thirdName= "of Denmark"
    }

    else if (color == "orange"){
    	thirdName= "of Denamrk"
    }

    else if (color == "red"){
    	thirdName= "of Denmark"
    }

    else {
    	alert("That is not a good color. Try again. (make sure first letter is lowercase)")
    }

// this is checking to see if each name is being set correctly
    console.log(firstName);
    console.log(secondName);
    console.log(thirdName);


// this is combining the names together and then putting that in the output
    const generatedName= firstName + " " + secondName + " " + thirdName;

    document.getElementById("generatedName").innerText = generatedName;
}




