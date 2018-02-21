/**
 * Author: Ntuthuko Mthiyane
 * Date: 21/02/2018
 * Description: This function is responsible for generating random users ojects read from the json object
 */
const allUsers = require('./team.json');

interface horseDetails {
    name: string;
    avatarUrl: string;
}

export function RandomHorses(noOfHorses: number): horseDetails[]{
    //Generate random numbers to make users random
    let randomHorses: number[] = [];
    while(randomHorses.length < noOfHorses){
        const random: number = Math.floor(Math.random()*29) + 1;
        //If number is unique, add to array
        if(randomHorses.indexOf(random) === -1){
            randomHorses.push(random);
        }
    }
    //Create objects of users in json file
    let racingHorses: horseDetails[] = [];
    for(let i =0; i< noOfHorses; i++){
        let position = randomHorses[i];
        racingHorses[i] = {
            name: allUsers[position]['login'],
            avatarUrl: allUsers[position]['avatar_url']
        };
    }
    return racingHorses;
}