import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';


class PauseStart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const started = this.props.started;

        const buttonStart = 
        <Button color="success" size="lg"
            onClick = {this.props.startPause}
        >
            Start
        </Button>

        const buttonPause = 
        <Button color="secondary" size="lg"
            onClick = {this.props.startPause}
        >
            Pause
        </Button>

        if(!started){
            return buttonStart;
        }

        return buttonPause;
    }

}

export default PauseStart;