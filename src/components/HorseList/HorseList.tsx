/**
 * Author: Ntuthuko Mthiyane
 * Date: 14/02/2018
 * Description: This component is responsible for creating multiple horse components
 */
import * as React from 'react';
import { Horse } from '../';
import './HorseList.css';
import { DeclareWinner } from '../../Utilities/DeclareWinner';

// This interface contains the properties of the horse object
interface HorseDetails {
    name: string;
    avatarUrl: string;
}

interface Props {
    startGame: boolean;
    noOfHorses: number;
    onStart: Function;
    allHorses: HorseDetails[];
}

interface State {
    horsesArray: string[];
}

export class HorseList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // Will store the horses who finish the race in the order in which the finish
        this.state = {
            horsesArray: []
        };

        this.addFinishedHorse = this.addFinishedHorse.bind(this);
        this.resetWinner = this.resetWinner.bind(this);
    }

    // As soon as a horse completes the race, it is added to the horse list
    addFinishedHorse(horse: string) {
        this.setState({ horsesArray: this.state.horsesArray.concat(horse) });
        DeclareWinner();

    }

    // Remove all those horses that were declared as completed race
    resetWinner() {
        this.setState({ horsesArray: [] });
    }

    render() {
        // If the game is restarted
        if (!this.props.startGame && this.state.horsesArray.length > 0) {
            this.resetWinner();
        }

        return (
            // Calling the hourse object
            <div className="main-div">
                <div className="Winner-div">
                    <label>
                        Winner:
                    </label>
                    <label className="WinnerLabel">
                        {this.state.horsesArray[0]}
                    </label>
                </div>
                <div className="ListDiv">
                    {this.props.allHorses.map((horse: HorseDetails, key: number) => (
                        <Horse
                            avatarUrl={horse.avatarUrl}
                            username={horse.name}
                            startGame={this.props.startGame}
                            addFinishedHorse={this.addFinishedHorse}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        );
    }
}