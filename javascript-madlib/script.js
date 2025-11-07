function makeStory() {
    const noun = document.getElementById("nounInput").value;
    const noun2 = document.getElementById("noun2Input").value;
    const noun3 = document.getElementById("noun3Input").value;
    const verb = document.getElementById("verbInput").value;
    const verb2 = document.getElementById("verb2Input").value;
	const verb3 = document.getElementById("verb3Input").value;
	const pronoun = document.getElementById("pronounInput").value;
	const adverb = document.getElementById("adverbInput").value;
	const color = document.getElementById("colorInput").value;
	const number = document.getElementById("numberInput").value;
	const adjective = document.getElementById("adjectiveInput").value;
	const animal = document.getElementById("animalInput").value;

    // simple story using the noun
    const story = "Once upon a time, there was a " + noun + " who loved to code JavaScript. This " + noun + " loved to " + verb + ". This " + noun + " had a friend, the " + noun2 + ". The " + noun2 + " loved to " + verb2 + " "+ adverb + ". Also, there was a " + noun3 + " who loved to " + verb3 + " and their favorite color was " + color + " and their favorite number was " +number +". " + pronoun + " was very " + adjective+ " and their favorite animal was a " + animal + ".";

    document.getElementById("storyOutput").innerText = story;
}