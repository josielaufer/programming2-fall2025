let counter = 0;

function mode() {

	document.body.classList.toggle("dark");

	if (counter % 2 == 0){ // light mode
		const darkSound= new Audio("sound.mp3");
		darkSound.play();
		document.getElementById("mode").innerText="Light mode🌞";
		counter=counter+1;


		} else {// dark mode
		const lightSound= new Audio("2sound.mp3");
		lightSound.play();
		document.getElementById("mode").innerText="Dark mode🌙" ;
		counter= counter+1

	}
	}