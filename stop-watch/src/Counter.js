import React, { Component } from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    parseTime = () =>{

        let milliSeconds = 0;
        let seconds = 0;
        let minutes = 0;

        if(this.props.counter  === 0){
            return '0' + minutes + ': 0' + seconds + ', 0' + milliSeconds;
        }

        milliSeconds = this.props.counter % 100;

        seconds = (this.props.counter - milliSeconds) / 100 % 60;
        if(seconds < 10){
            seconds = '0' + seconds;
        }

        let mins = ((this.props.counter - milliSeconds) / 6000) - seconds / 100;
        minutes =  mins.toFixed(0);
        if(minutes < 10){
            minutes = '0' + minutes;
        }

        return  minutes + ': ' + seconds + ', ' + milliSeconds;
    }


    render(){
        return this.parseTime();
    }

}

export default Counter;