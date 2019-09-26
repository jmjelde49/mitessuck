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


//Treatment options are selected based on the following variables:

// QUESTION: Do we need to take any other variable, like season, into account?
// TO DO: Get values for variables from input form and weather API

let miteCount300 = 10;	//number of mites per 300 adult bees (1/2 cup)
let maxTemp = 91;       //maximum temperature in x-day weather forecast
let minTemp = 55;       //minimum termperature in x-day weather forecast
let honeySupers = true; //true if honey supers present
let brood = true;       //true if brood present
let nonOrganic = true;  //true if open to non-organic treatments

