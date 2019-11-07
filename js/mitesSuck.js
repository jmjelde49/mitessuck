// TO DO: Produce form for mite treatment inputs for researchers
// TO DO: Find researchers
// TO DO: Add treatments from completed forms
// TO DO: Print accepted treatments to the DOM
// TO DO: Add time marker/version stamp to DOM
// TO DO: Get min/max temps from weather api based on zip code
// TO DO: Styling/appearance
// TO DO: Add seasonality logic
// TO DO: Add additional treatment options as objects to array
// TO DO: Add additional information to treatment options: description, instructions, video link,...
// TO DO: Discuss, is there a more efficient way to get inputs from checkboxes and radio buttons?
// QUESTION: Do we need to take any other variable, like season, into account?
// Answer:  Yes. THe HBC app does this by asking if the colony is increasing, decreasing, stable or in cluster. 
// TO DO: Get values for variables from input form and weather API

let miteCount300 = 10;		//number of mites per 300 adult bees (1/2 cup)
let minTemp = 60;       	//minimum temperature in degree Fahrenheit in x-day weather forecast
let maxTemp = 65;			//maximum temperature in degree Fahrenheit in x-day weather forecast
let honeySupers = false;  	//true if honey supers present
let brood = true;       	//true if brood present
let nonSynthetic = false;   	//true if open to non-synthetic treatments


// Available treatment options are:



let treatmentOptions = [
	{
		name: "Apivar",
		minTemp: "none",     // "none" if treatment has no minimum temperature requirement
		maxTemp: "none",     // "none" if treatment has no maximum temperature requirement
		honeySupers: false,  // false if treatment cannot be used with honey supers present
		brood: true,				 // true if treatment can be used with brood present
		synthetic: false       // true if treatment is synthetic
	},
		{
		name: "Queen seclusion",
		minTemp: "none",
		maxTemp: "none",
		honeySupers: true,
		brood: true,
		synthetic: true
	},
	{
		name: "Apistan",
		minTemp: 50,
		maxTemp: "none",
		honeySupers: false,
		brood: true,
		synthetic: false
	},
	{
		name: "CheckMite",
		minTemp: "none",
		maxTemp: "none",
		honeySupers: false,
		brood: true,
		synthetic: false
	},
	{
		name: "Test1",
		minTemp: 50,
		maxTemp: 95,
		honeySupers: true,
		brood: true,
		synthetic: true
	},
	{
		name: "Test2",
		minTemp: 50,
		maxTemp: 95,		
		honeySupers: true,
		brood: false,
		synthetic: true
	}
]


// Treatments are selected based on the following conditions:

function checkOptions(option) {
	let flag = false
	// check for minimum temperature
 	if ((option.minTemp == "none") || (option.minTemp <= minTemp)) {
 		// check for maximum temperature
 		if ((option.maxTemp == "none") || (option.maxTemp >= maxTemp)) {
 			// check for honey supers
 			if (honeySupers ? option.honeySupers : true) {
 				// check for brood
 				if (brood ? option.brood : true) {
 					// check for Synthetic treatment
 					if (nonSynthetic ? true : option.Synthetic) {
 						flag = true
 					}
 				}
 			}
 		}
 	}
	return flag
} 

// The treatment options selected based on the user input are:

let treatmentSelection = treatmentOptions.filter(checkOptions)
console.log(treatmentSelection)

//Retrieve values on form submit

function formSubmit(){
	var input = {
		miteCount300: document.getElementById("loadInput").value,
		zip: document.getElementById("zipInput").value,
		season: "increasing",
		supers: false, 
 		brood: false,
 		synthetic: false
 	};
 	//loop through radio button to get correct value
 	
 	if (document.getElementById("dormant").checked)
 		{input.season="dormant"}
 	else if (document.getElementById("peak").checked)
 		{input.season="peak"}
	else if (document.getElementById("decreasing").checked)
		{input.season="decreasing"}
	
 	if (document.getElementById("supersInput").checked)
 		{input.supers = true};
 	if (document.getElementById("broodInput").checked)
 		{input.brood = true};
 	if (document.getElementById("syntheticInput").checked)
 		{input.synthetic = true};
 	console.log(input);
 }





