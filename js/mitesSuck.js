// var treatmentsArray=[['1 Name', '1 Description', '1 Instructions', '1 Video', '1 FAQ', '1 More', true, false, false],
// 				['2 Name', '2 Description', '2 Instructions', '2 Video', '2 FAQ', '2 More', true, false, true],
// 				['3 Name', '3 Description', '3 Instructions', '3 Video', '3 FAQ', '3 More', false, false, true]];

// var treatmentsObject={
// 	'treatmentOne': {"name": "1 name",
// 			"description": "1 description",
// 			"instructions": "1 instructions",
// 			"video": "1 video",
// 			"faq": "1 FAQ",
// 			"more": "1 more",
// 			"organic": false,
// 			"brood": true,
// 			"supers": false
// 	},
// 	'treatmentTwo': {"name": "2 name",
// 			"description": "2 description",
// 			"instructions": "2 instructions",
// 			"video": "2 video",
// 			"faq": "2 FAQ",
// 			"more": "2 more",
// 			"organic": false,
// 			"brood": true,
// 			"supers": false
// 	},
// 	'treatmentThree': {"name": "3 name",
// 			"description": "3 description",
// 			"instructions": "3 instructions",
// 			"video": "3 video",
// 			"faq": "3 FAQ",
// 			"more": "3 more",
// 			"organic": true,
// 			"brood": true,
// 			"supers": false
// 	}
// };
// console.log(treatmentsArray[0]);
// console.log(treatmentsObject.treatmentThree)


// Treatment options are selected based on the following variables:

// QUESTION: Do we need to take any other variable, like season, into account?
// TO DO: Get values for variables from input form and weather API

let miteCount300 = 10;		//number of mites per 300 adult bees (1/2 cup)
let minTemp = 55;       	//minimum temperature in degree Fahrenheit in x-day weather forecast
let maxTemp = 91;					//maximum temperature in degree Fahrenheit in x-day weather forecast
let honeySupers = false;  //true if honey supers present
let brood = true;       	//true if brood present
let nonOrganic = false;   //true if open to non-organic treatments


// Available treatment options are:

// TO DO: Add additional treatment options as objects to array
// TO DO: Add additional information to treatment options: description, instructions, video link,...

let options = [
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
		minTemp: 60,
		maxTemp: 95,
		honeySupers: true,
		brood: false,
		organic: true
	},
	{
		name: "Test2",
		minTemp: 60,
		maxTemp: 85,		
		honeySupers: true,
		brood: true,
		organic: true
	}
]


// Treatments are selected based on the following conditions:

function checkMinTemp(option) {
	return ((option.minTemp == "none") || (option.minTemp <= minTemp))
}

function checkMaxTemp(option) {
	return ((option.maxTemp == "none") || (option.maxTemp <= maxTemp))
}

function checkHoneySupers(option) {
	return (honeySupers ? option.honeySupers : true)
}

function checkBrood(option) {
	return (brood ? option.brood : true)
}

function checkOrganic(option) {
	return (nonOrganic ? true : option.organic)
}

let selectionMaxTemp = options.filter(checkMaxTemp)
console.log(selectionMaxTemp)


