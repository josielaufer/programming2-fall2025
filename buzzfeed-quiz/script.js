function TSAlbum() {
	let taylorSwift=0
	let fearless=0
	let speakNow=0
	let red=0
	let nine=0
	let lover=0
	let reputation=0
	let folklore=0
	let evermore=0
	let midnights=0
	let TLOASG=0


	let fall = document.getElementById("fall");
	if(fall.checked) { // if filled in
		evermore=evermore+3
		red=red+4
		console.log("The user chose fall");
	}

	let winter = document.getElementById("winter");
	if(winter.checked) {
		reputation=reputation+4
		midnights=midnights+1
		folklore=folklore+3
		console.log("The user chose winter");
	}

	let spring = document.getElementById("spring");
	if(spring.checked) {
		nine=nine+3
		lover=lover+3
		TLOASG=TLOASG+3
		console.log("The user chose spring");
	}


	let summer = document.getElementById("summer");
	if(summer.checked) {
		taylorSwift=taylorSwift+3
		fearless=fearless+1
		speakNow=speakNow+3
		console.log("The user chose summer");
	}




	let nothing = document.getElementById("nothing");
	if(nothing.checked) { // if filled in
		taylorSwift=taylorSwift+2
		fearless=fearless+3
		console.log("The user chose nothing");
	}

	let blue = document.getElementById("blue");
	if(blue.checked) {
		midnights=midnights+2
		TLOASG=TLOASG+3
		speakNow=speakNow+2
		console.log("The user chose blue");
	}

	let white = document.getElementById("white");
	if(white.checked) {
		folklore=folklore+4
		console.log("The user chose white");
	}

	let black = document.getElementById("black");
	if(black.checked) {
		reputation=reputation+4
		evermore=evermore+1
		console.log("The user chose black");
	}

	let pink = document.getElementById("pink");
	if(pink.checked) {
		lover=lover+4
		nine=nine+1
		console.log("The user chose pink");
	}

	


	let daytime = document.getElementById("daytime");
	if(daytime.checked) {
		nine=nine+1
		lover=lover+3
		TLOASG=TLOASG+2
		taylorSwift=taylorSwift+1
		console.log("The user chose daytime");
	}

	let afternoon = document.getElementById("afternoon");
	if(afternoon.checked) {
		nine=nine+1
		speakNow=speakNow+1
		folklore=folklore+1

		fearless=fearless+1

		console.log("The user chose afternoon");
	}

	let nightime = document.getElementById("nightime");
	if(nightime.checked) {
		reputation=reputation+3
		midnights=midnights+4
		console.log("The user chose nightime");
	}	




	let sad = document.getElementById("sad");
	if(sad.checked) {
		folklore =folklore+1
		evermore=evermore+1
		midnights=midnights+2
		console.log("The user chose sad");
	}

	let happy = document.getElementById("happy");
	if(happy.checked) {
		nine=nine+1
		lover=lover+1
		taylorSwift=taylorSwift+1
		fearless=fearless+1
		TLOASG=TLOASG+1

		console.log("The user chose happy");
	}

	let both = document.getElementById("both");
	if(both.checked) {
		reputation=reputation+1
		speakNow=speakNow+1
		red=red+1
		console.log("The user chose both");
	}	






	let album= " "
	let description=" "

	if (taylorSwift>fearless && taylorSwift>speakNow && taylorSwift>red && taylorSwift>nine && taylorSwift>lover && taylorSwift>reputation && taylorSwift>folklore && taylorSwift>evermore && taylorSwift>midnights && taylorSwift>TLOASG) {
		album = "Taylor Swift (debut)"
		
	}

	else if (fearless>taylorSwift && fearless>speakNow && fearless>red && fearless>nine && fearless>lover && fearless>reputation && fearless>folklore && fearless>evermore && fearless>midnights && fearless>TLOASG) {
		album = "Fearless"
		
		

	}


	else if (speakNow>taylorSwift && speakNow>fearless && speakNow>red && speakNow>nine && speakNow>lover && speakNow>reputation && speakNow>folklore && speakNow>evermore && speakNow>midnights && speakNow>TLOASG) {
		album = "Speak Now"
		

	}

	else if (red>taylorSwift && red>fearless && red>speakNow && red>nine && red>lover && red>reputation && red>folklore && red>evermore && red>midnights && red>TLOASG) {
		album = "Red"
		

	}

	else if (nine>taylorSwift && nine>fearless && nine>speakNow && nine>red && nine>lover && nine>reputation && nine>folklore && nine>evermore && nine>midnights && nine>TLOASG) {
		album = "1989"
		

	}

	else if(lover>taylorSwift && lover>fearless && lover>speakNow && lover>nine && lover>red && lover>reputation && lover>folklore && lover>evermore && lover>midnights && lover>TLOASG) {
		album = "Lover"
		
	}

	else if (reputation>taylorSwift && reputation>fearless && reputation>speakNow && reputation>nine && reputation>red && reputation>lover && reputation>folklore && reputation>evermore && reputation>midnights && reputation>TLOASG) {
		album = "Reputation"
		

	}

	else if (folklore>taylorSwift && folklore>fearless && folklore>speakNow && folklore>nine && folklore>red && folklore>lover && folklore>reputation && folklore>evermore && folklore>midnights && folklore>TLOASG) {
		album = "Folklore"
		

	}

	else if (evermore>taylorSwift && evermore>fearless && evermore>speakNow && evermore>nine&& evermore>red && evermore>lover && evermore>reputation && evermore>folklore && evermore>midnights && evermore>TLOASG) {
		album = "Evermore"
		

	}

	else if (midnights>taylorSwift && midnights>fearless && midnights>speakNow && midnights>nine && midnights>red && midnights>lover && midnights>reputation && midnights>folklore && midnights>evermore && midnights>TLOASG) {
		album = "Midnights"
		
	}

	else if (TLOASG>taylorSwift && TLOASG>fearless && TLOASG>speakNow && TLOASG>nine && TLOASG>red && TLOASG>lover && TLOASG>reputation && TLOASG>folklore && TLOASG>evermore && TLOASG>midnights) {
		album="The Life Of a Show Girl"
		

	}

	else {
		const albums = ["Taylor Swift (debut)", "Fearless", "Speak Now", "Red", "1989", "Lover", "Reputation", "Folklore", "Evermore", "Midnights", "The Life Of a Show Girl"];

		const random = Math.floor(Math.random() * albums.length);
		console.log(random, albums[random]);

		album=albums[random]

		

	}

	document.getElementById("album").innerText=album;


	

	if (album == "Taylor Swift (debut)"){
		const debutSound= new Audio("taylor-swift.mp3");
		debutSound.play();
		document.body.style.backgroundColor= "green";
		document.body.style.color= "white";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "lightBlue";
		document.getElementById("header").style.color= "white";
		document.getElementById("image").src="https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-self-titled-billboard-1240.jpg?";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "lightBlue";
			item.style.color = "white";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "green";
		}

		description="You are carefree, love the summer time and are passionate about the things you love. "

	}


	else if (album == "Fearless"){
		const fearlessSound= new Audio("fearless.mp3");
		fearlessSound.play();
		document.body.style.backgroundColor= "#FCD12A";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "white";
		document.getElementById("header").style.color= "black";
		document.getElementById("image").src="https://www.billboard.com/wp-content/uploads/2022/10/taylor-swift-fearless-2008-billboard-1240.jpg?";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "white";
			item.style.color= "black";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "#FCD12A";
		}
		description= "You are fearless, not afraid of a challenge and have a creative imagination."
	}


	else if (album == "Speak Now"){
		const speaknowSound= new Audio("speak-now.mp3");
		speaknowSound.play();
		document.body.style.backgroundColor= "purple";
		document.body.style.color= "white";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "#E4A0F7";
		document.getElementById("header").style.color= "white";
		document.getElementById("image").src="https://people.com/thmb/_6-x9pNd5xMw3WJ6luN9YIdNmwg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/taylor-swift-albums-3-5831d0787fb94e94b56b89cd1d203689.jpg";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "#E4A0F7";
			item.style.color="white"
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "purple";
		}
		description="You say what's on your mind at all times and when you experience emotions, you feel them very deeply."
		
	
	}

	else if (album == "Red"){
		const redSound= new Audio("red.mp3");
		redSound.play();
		document.body.style.backgroundColor= "red";
		document.body.style.color= "white";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "white";
		document.getElementById("header").style.color= "black";
		document.getElementById("image").src="https://stylecaster.com/wp-content/uploads/2024/04/Red.png?";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "white";
			item.style.color= "black";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "red";
		}
		description="You are very intelligent, thoughtful and a great team player.  "
		
	
	}

	else if (album =="1989"){
		const nineSound= new Audio("1989.mp3");
		nineSound.play();
		document.body.style.backgroundColor= "lightBlue";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "#E4A0F7";
		document.getElementById("header").style.color= "white";
		document.getElementById("image").src="https://people.com/thmb/nf5iWE5yBnk7ywgOIanE11nrcH4=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/taylor-swift-albums-5-76d90fcaeaa84286a78c344dbeae9209.jpg";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "#E4A0F7";
			item.style.color= "white";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "lightBlue";
		}
		description= "You are outgoing, kind to your friends and excited for the future."
		
	}

	else if (album == "Lover"){
		const loverSound= new Audio("lover.mp3");
		loverSound.play();
		document.body.style.backgroundColor= "lightPink";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "lightBlue";
		document.getElementById("header").style.color= "white";
		document.getElementById("image").src="https://i.insider.com/5db1be67045a314d4d6dc055?width=800&format=jpeg&auto=webp";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "lightBlue";
			item.style.color= "white";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "lightPink";
		}
		description="You are in love whether you know it or not and are a charistmatic person"
		
	}

	else if (album == "Reputation") {
		const reputationSound= new Audio("reputation.mp3");
		reputationSound.play();
		document.body.style.backgroundColor= "darkGrey";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "black";
		document.getElementById("header").style.color= "white";
		document.getElementById("image").src="https://people.com/thmb/Il8Det7N7UvvQAojNWSQyhcnjuM=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(992x0:994x2)/taylor-swift7-2000-48f9bfb372c34e36866773b1ede0b372.jpg";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "black";
			item.style.color="white"
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "darkGrey";
		}
		description="You call people out when you catch them lying but you also have a soft side."
		
	}

	else if (album == "Folklore") {
		const folkloreSound= new Audio("folklore.mp3");
		folkloreSound.play();
		document.body.style.backgroundColor= "grey";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "white";
		document.getElementById("header").style.color= "black";
		document.getElementById("image").src="https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "white";
			item.style.color="black";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "grey";
		}
		description="You are a storyteller with lots of ideas. "
		
	}

	else if (album == "Evermore") {
		const evermoreSound= new Audio("evermore.mp3");
		evermoreSound.play();
		document.body.style.backgroundColor= "grey";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "white";
		document.getElementById("header").style.color= "black";
		document.getElementById("image").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWRnJodHAw3EQsXc-FuPdf4Lzmxh5sLDWxg&s";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "white";
			item.style.color="black";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "grey";
		}
		description="You do not express emotions in a grand way but you feel them deeply instead."
		

	}

	else if (album == "Midnights"){
		const midnightsSound= new Audio("midnights.mp3");
		midnightsSound.play();
		document.body.style.backgroundColor= "darkBlue";
		document.body.style.color= "white";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "purple";
		document.getElementById("header").style.color= "white";
		document.getElementById("image").src="https://i.iheart.com/v3/re/new_assets/63502b9eaee0f4b0e56f9a54?ops=contain(1480,0)";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "purple";
			item.style.color="white";
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "darkBlue";
		}
		description="You are a very fun person with a hilarious humor."
		
	}

	else if (album=="The Life Of a Show Girl"){
		const showgirlSound= new Audio("TLOASG.mp3");
		showgirlSound.play();
		document.body.style.backgroundColor= "orange";
		document.getElementById("album").style.fontWeight= "bold";
		document.getElementById("album").style.color= "white";
		document.getElementById("header").style.backgroundColor= "lightGreen";
		document.getElementById("header").style.color= "black";
		document.getElementById("image").src="https://pagesix.com/wp-content/uploads/sites/3/2025/08/taylor-swift-life-showgirl-cover-109561677-1.png";
		const question = document.getElementsByClassName("question");
		for (const item of question) {
			item.style.backgroundColor= "lightGreen";
			item.style.color="black"
		}

		const box = document.getElementsByClassName("box");
		for (const item of box) {
			item.style.backgroundColor= "orange";
		}
		description="You are confident, interesting and dramatic. "
		
	}


document.getElementById("description").innerText=description;







}