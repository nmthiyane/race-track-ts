"use strict";
exports.__esModule = true;
/**
 * Author: Ntuthuko Mthiyane
 * Date: 21/02/2018
 * Description: This function is responsible for generating random users ojects read from the json object
 */
var allUsers = require('./team.json');
function RandomHorses(noOfHorses) {
    //Generate random numbers to make users random
    var randomHorses = [];
    while (randomHorses.length < noOfHorses) {
        var random = Math.floor(Math.random() * 29) + 1;
        //If number is unique, add to array
        if (randomHorses.indexOf(random) === -1) {
            randomHorses.push(random);
        }
    }
    //Create objects of users in json file
    var racingHorses = [];
    for (var i = 0; i < noOfHorses; i++) {
        var position = randomHorses[i];
        racingHorses[i] = {
            name: allUsers[position]['login'],
            avatarUrl: allUsers[position]['avatar_url']
        };
    }
    return racingHorses;
}
exports.RandomHorses = RandomHorses;
