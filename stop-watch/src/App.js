import React, {Component} from 'react';
import './App.css';
import StopWatch from './StopWatch';

class App extends React.Component{
  constructor(props){
 super(props);
}


render(){
  
  const stopWatch = <StopWatch name = 'StopWatch'/>;
  return (
    stopWatch
  );
}

}
export default App;