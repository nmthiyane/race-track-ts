/**
 * Author: Ntuthuko Mthiyane
 * Date: 21/02/2018
 * Description: This function is responsible for generating random users ojects read from the json object
 */

import * as React from 'react';
import './App.css';
const logo =  require('../../images/horse.png');
const Menus = require('../Menus');
const HorseList = require('../HorseList');
const RandomHorses = require('../../Utilities/RandomHorses.js');

//interface with the propperties of each horse
interface horseDetails {
    name: string;
    avatarUrl: string;
}

interface Props {
	samplePropProp?: string;
}

interface State {
	noOfHorses: number;
	start: boolean;
	racingHorses: horseDetails[];
}
 
export class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    
    this.state = {
      noOfHorses: 2,
      start: false,
      racingHorses: []
    };

    this.populateUsers = this.populateUsers.bind(this);
    this.startGame = this.startGame.bind(this);
    this.returnRandomHorses = this.returnRandomHorses.bind(this);
  }

  //Calls the JS files that generate uses read from the json file
  returnRandomHorses(horses: number): horseDetails[]{
    return RandomHorses(horses);
  }

  componentDidMount(){
    this.setState({racingHorses: this.returnRandomHorses(2)});
  }

  //update number of horses
  populateUsers(noOfHorses: number){
    this.setState({noOfHorses, racingHorses: this.returnRandomHorses(noOfHorses)});
  }

  //Update start game state
  startGame(start: boolean){
    this.setState({start});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kurtosys Race Track</h1>
          <h2 className="App-sub-title">Let the best man win</h2>
        </header>
        <p className="App-intro">
        </p>
        <div className = 'Components'>
          <Menus 
            onPopulate = {this.populateUsers}
            onStart = {this.startGame}
          />
          <HorseList 
            noOfHorses = {this.state.noOfHorses}
            allHorses = {this.state.racingHorses}
            startGame = {this.state.start}
            onStart = {this.startGame}
          />
        </div>
      </div>

    );
  }
}