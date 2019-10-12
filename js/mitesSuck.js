// Treatment options are selected based on the following variables:

// QUESTION: Do we need to take any other variable, like season, into account?
// Answer:  Yes. THe HBC app does this by asking if the colony is increasing, decreasing, stable or in cluster. 
// TO DO: Get values for variables from input form and weather API

let miteCount300 = 10;		//number of mites per 300 adult bees (1/2 cup)
let minTemp = 55;       	//minimum temperature in degree Fahrenheit in x-day weather forecast
let maxTemp = 91;					//maximum temperature in degree Fahrenheit in x-day weather forecast
let honeySupers = false;  //true if honey supers present
let brood = false;       	//true if brood present
let nonOrganic = false;   //true if open to non-organic treatments


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


