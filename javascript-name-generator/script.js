function makeName() {
    const month = document.getElementById("month").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;
   	let firstName="";
   	let secondName="";
   	let thirdName="";



    if (month=="january") {
    	firstName="strawberry"
    }

    else if (month=="february") {
    	firstName="blueberry"
    }

    else if (month=="march") {
    	firstName="pineapple"
    }

    else if (month=="april") {
    	firstName="pomegranate"
    }

    else if (month=="may") {
    	firstName="grape"
    }

    else if (month=="june") {
    	firstName="watermelon"
    }

    else if (month=="july") {
    	firstName="dragonfruit"
    }

    else if (month=="august") {
    	firstName="mango"
    }

    else if (month=="september") {
    	firstName="melon"
    }

    else if (month=="october") {
    	firstName="apple"
    }

    else if (month=="november"){
    	firstName="banana"
    }

    else if (month=="december") {
    	firstName="raspberry"
    }

    else{
    	alert("That is not a month. Try again.")
    }


    if (age > 0 && age <10) {
    	secondName="princess"
    }

    else if (age > 10 && age <20) {
    	secondName="prince"
    }

    else if (age > 50 && age <100) {
    	secondName="king"
    }

    else {
    	alert("That is not your actual age. Try again.")

    }

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
    	alert("That is not a good color. Try again.")
    }




    const generatedName= firstName + " " + secondName + " " + thirdName;

    document.getElementById("generatedName").innerText = generatedName;
}




