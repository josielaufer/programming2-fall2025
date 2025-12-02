function makePlan() {
    const sound= new Audio("sound.mp3");
    sound.play();
    document.body.style.backgroundColor= "hotPink";


    const guestsInput = document.getElementById("guestsInput").value;
    
    let sodas= (guestsInput * 2)
    let plates= (guestsInput * 2)
    let cups= (guestsInput * 2)
    let balloons= (guestsInput * 5)
    let pizza= (guestsInput * 2)


    const plan = "You will need :"
    sodas= sodas + " sodas" 
    plates= plates + " plates" 
    cups= cups + " cups" 
    balloons= balloons + " balloons" 
    pizza= pizza + " pizzas" 

    document.getElementById("plan").innerText = plan;
    document.getElementById("sodas").innerText = sodas;
    document.getElementById("plates").innerText = plates;
    document.getElementById("cups").innerText = cups;
    document.getElementById("balloons").innerText = balloons;
    document.getElementById("pizza").innerText = pizza;



}