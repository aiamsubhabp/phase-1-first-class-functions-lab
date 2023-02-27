// Code your solution in this file!
let divers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(divers){
    return divers.slice(0,2);
}

const returnLastTwoDrivers = function(divers){
    return divers.slice(2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function (fare) {
        return fare*num1;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(divers, returnedDrivers){
    return returnedDrivers(divers);
}