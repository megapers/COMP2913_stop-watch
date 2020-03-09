import React, { Component } from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            countDown: 0,
        }
    }

    tick = () => {
        let incr = 0;
        this.setState({countDown: this.state.countDown+1});
        incr++;
    }
    
    
   
    componentDidUpdate(){
        if(this.props.started){
            this.countID = setInterval(this.tick, 1000);
            console.log(this.state.countDown);
        }
        else{
            clearInterval(this.countID);
        }
    }


    render(){
        return this.state.countDown;
    }

}

export default Counter;