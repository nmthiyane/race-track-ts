/**
 * Author: Ntuthuko Mthiyane
 * Date: 21/02/2018
 * Description: This function is responsible for generating the menu where the 
 * user will start,and reset game and select number of users
 */

import * as React from 'react';
import './Menus.css';
const startIcon  = require('../../images/start_icon.png'); 
const resetIcon = require('../../images/reset_icon.png');

interface Props {
    onPopulate: Function;
    onStart: Function;
}

interface State {
    sampleStateProp?: string; 
    userInput: string | number;
}

export class Menus extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            userInput: ''
        };
        this.handleText = this.handleText.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
        this.handleResetGame = this.handleResetGame.bind(this);
    }

    // Change from any to proper thing
    handleText(): void {
        const value =  this.state.userInput;
        // Pass noOfHorses to parent
        if (value === '') {
            // Reset to default
            this.props.onPopulate(2);

        } else if (value < 2 || value > 9) {
            alert('Number of horses must from 2 - 9');

        } else {
            this.props.onPopulate(value);
        }
    }

    handleStartGame() {
        this.props.onStart(true);
    }

    handleResetGame() {
        this.props.onStart(false);
        this.props.onPopulate(2);
    }
    
    render() {
        return (
            <div className="main-menu">
                <div className="menu-text">
                    <p> Enter No. of horses </p>
                    <input 
                        type="text" 
                        onChange={(event) => (this.setState(({userInput: event.target.value}),  this.handleText))}
                        value={this.state.userInput}
                        placeholder="2=< horses =<9"
                    />
                    <img 
                        className="StartButton"
                        src={startIcon}
                        alt="Start icon"
                        onClick={this.handleStartGame}
                    />
                    <img 
                        className="ResetButton"
                        src={resetIcon}
                        alt="Reset Button"
                        onClick={this.handleResetGame}
                    />
                </div> 
            </div>   
        );
    }
}