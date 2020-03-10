import React, {Component} from 'react';
import PauseStart from './PauseStart';
import Counter from './Counter';

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

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Counter counter = {this.state.counter}/>
                    <PauseStart 
                        startPause = {this.startPause}
                        started = {this.state.started}
                    />    
                </header>
            </div>
        );
       
    }

}

export default StopWatch;