// Treatment options are selected based on the following variables:

// QUESTION: Do we need to take any other variable, like season, into account?
// Answer:  Yes. THe HBC app does this by asking if the colony is increasing, decreasing, stable or in cluster. 
// TO DO: Get values for variables from input form and weather API

let miteCount300 = 10;		//number of mites per 300 adult bees (1/2 cup)
let minTemp = 60;       	//minimum temperature in degree Fahrenheit in x-day weather forecast
let maxTemp = 65;			//maximum temperature in degree Fahrenheit in x-day weather forecast
let honeySupers = false;  	//true if honey supers present
let brood = true;       	//true if brood present
let nonOrganic = false;   	//true if open to non-organic treatments


// Available treatment options are:

// TO DO: Add additional treatment options as objects to array
// TO DO: Add additional information to treatment options: description, instructions, video link,...

let treatmentOptions = [
	{
		name: "Apivar",
		minTemp: "none",     // "none" if treatment has no minimum temperature requirement
		maxTemp: "none",     // "none" if treatment has no maximum temperature requirement
		honeySupers: false,  // false if treatment cannot be used with honey supers present
		brood: true,				 // true if treatment can be used with brood present
		organic: false       // true if treatment is organic
	},
		{
		name: "Queen seclusion",
		minTemp: "none",
		maxTemp: "none",
		honeySupers: false,
		brood: true,
		organic: true
	},
	{
		name: "Apistan",
		minTemp: 50,
		maxTemp: "none",
		honeySupers: false,
		brood: true,
		organic: false
	},
	{
		name: "CheckMite",
		minTemp: "none",
		maxTemp: "none",
		honeySupers: false,
		brood: true,
		organic: false
	},
	{
		name: "Test1",
		minTemp: 50,
		maxTemp: 95,
		honeySupers: true,
		brood: true,
		organic: true
	},
	{
		name: "Test2",
		minTemp: 50,
		maxTemp: 95,		
		honeySupers: true,
		brood: false,
		organic: true
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
 					// check for organic treatment
 					if (nonOrganic ? true : option.organic) {
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
 		organic: false
 	};
 	//loop through radio button to get correct value
 	//there may be a more efficient way to do this, bypassing this section if the colony is increasing
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
 	if (document.getElementById("organicInput").checked)
 		{input.organic = true};
 	console.log(input);
 }





