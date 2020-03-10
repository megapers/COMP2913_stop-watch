import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'reactstrap';

class Reset extends React.Component{

    constructor(props){
        super(props);
    }

    disabled = () => {
        let started = this.props.started;
        let counter = this.props.counter;

        if(!started && counter === 0){
            return true;
        }
        else{
            return false;
        }
    }

    render(){
        const buttonReset = 
        <Button outline color="primary" size="lg"
            onClick = {this.props.reset}
            disabled = {this.disabled()}
        >
            Reset
        </Button>

        return buttonReset;
    }

}

export default Reset;