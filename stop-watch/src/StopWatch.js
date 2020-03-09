import React, {Component} from 'react';
import PauseStart from './PauseStart';
import Counter from './Counter';

class StopWatch extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            started: false
        }
    }

    startPause = () => {
        if(!this.state.started){
            this.setState({started: true});
        }
        else{
            this.setState({started: false});
        }
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Counter started = {this.state.started}/>
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