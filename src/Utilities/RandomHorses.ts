/**
 * Author: Ntuthuko Mthiyane
 * Date: 21/02/2018
 * Description: This function is responsible for generating random users ojects read from the json object
 */
const allUsers = require('./team.json');

interface HorseDetails {
    name: string;
    avatarUrl: string;
}

export function RandomHorses(noOfHorses: number): HorseDetails[] {
    // Generate random numbers to make users random
    let randomHorses: number[] = [];
    while (randomHorses.length < noOfHorses) {
        const random: number = Math.floor(Math.random() * 29) + 1;
        // If number is unique, add to array
        if (randomHorses.indexOf(random) === -1) {
            randomHorses.push(random);
        }
    }
    // Create objects of users in json file
    let racingHorses: HorseDetails[] = [];
    for (let i = 0 ; i < noOfHorses; i++) {
        let position: number = randomHorses[i];
        racingHorses[i] = {
            name: allUsers[position].login,
            avatarUrl: allUsers[position].avatar_url
        };
    }
    return racingHorses;
}