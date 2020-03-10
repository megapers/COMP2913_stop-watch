import React, {Component} from 'react';
import PauseStart from './PauseStart';
import Counter from './Counter';
import Reset from './Reset';

class StopWatch extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            started: false,
            counter: 0
        }
    }

    tick = () => {
        let incr = 0;
        this.setState({counter: this.state.counter+1});
        incr++;
    }


    startPause = () => {
        if(!this.state.started){
            this.setState({started: true});
            this.countID = setInterval(this.tick, 10);
        }
        else{
            this.setState({started: false});
            clearInterval(this.countID);

        }
    }

    reset = () => {
        
            clearInterval(this.countID);
            this.setState({
                started: false,
                counter: 0
            });
        
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Counter counter = {this.state.counter}/>
                    <PauseStart 
                        startPause = {this.startPause}
                        started = {this.state.started}
                    />
                    <br/>    
                    <Reset
                        reset = {this.reset}
                        started = {this.state.started}
                        counter = {this.state.counter}
                    />
                </header>
            </div>
        );
       
    }

}

export default StopWatch;