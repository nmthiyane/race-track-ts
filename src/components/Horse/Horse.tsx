/**
 * Author: Ntuthuko Mthiyane
 * Date: 21/02/2018
 * Description: This component is responsible for rendering a single horse
 */
import * as React from 'react';
import './Horse.css';

interface Props {
    startGame: boolean;
    addFinishedHorse: Function;
    avatarUrl: string;
    username: string;
}

interface State {
    progress: number;
    isFinish?: boolean;
}

export class Horse extends React.Component<Props, State> {
    timeInterval: NodeJS.Timer;
    constructor(props: Props) {
        super(props);

        this.state = {
            progress: 0,
            isFinish: false
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.addToFinish = this.addToFinish.bind(this);
        this.incrementProgress = this.incrementProgress.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    // This function will generate a random increment to each horse progress
    incrementProgress() {
        let {progress} = this.state;
        let {startGame} = this.props;

        if (progress < 100 && startGame) {
            let randomInceament = Math.floor(Math.random() * 5) + 1;
            this.setState({ progress: progress + randomInceament});
        }
    }

    stopTimer() {
        let {progress} = this.state;
        // Once the progress reaches 100%, than stop the time interval
        if (progress >= 100) {
            clearInterval(this.timeInterval);
        }
    }

    startTimer() {
        let {progress} = this.state;
        let {startGame} = this.props;

        // If this is the start of the race, start the interval
        if (progress === 0 && startGame) {
            this.timeInterval = setInterval(this.incrementProgress, 200);
        }
    }

    // Alert the parent that the horse has completed the race
    addToFinish(username: string) {
        this.setState({isFinish: true });
        this.props.addFinishedHorse(username);
    }

    // Update the state when the game is restarted
    handleRestart() {
        this.setState({ progress: 0 });
        this.setState({ isFinish: false });
    }

    render() {
        let { startGame, username } = this.props;
        let { progress, isFinish } = this.state;

        // If start is clicked for the first time
        if (startGame && progress === 0) {
            this.startTimer();

        } else if (progress >= 100 && !isFinish) { 
            // Once the horse completes the horse, declare as finish and alert the parent
            this.stopTimer();
            this.addToFinish(username);
        
        } else if (!startGame && progress !== 0) {
            // When game is restarted, changed the progress to 0. 
            this.handleRestart();
        }

        return (
            <div className="HorseDiv">
                <h4 className="Horse Name">
                    {this.props.username}
                </h4>
                <img
                    src={this.props.avatarUrl}
                    alt="Horse avatar"
                />
                <progress value={this.state.progress} max="100"> {this.props.username}</progress>
            </div>
        );
    }
}