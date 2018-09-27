import React, { Component } from 'react';
// import Numbers from './Number/Number';
// import Todo from './Todo/Todo';
// import Timer from './Pomodoro/Timer';
// import Home from './Home/Home';
// import Coins from './Coin/Coin';
// import Chart from './Chart/Chart'
// import Notes from './Notes/Notes';
// import XSS from './XSS/XSS';
// import Animation from './Animation/Animation'; 
import Person from './Person/Person';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
// import { notes1, notes2 } from './Notes/Data';
// import Calculator from './Calculator/Calculator';
import './App.css';


class App extends Component {
  constructor(props) {      
    super(props);
    this.state = {        
      chartType: 'line'      
    };  
    // this.columns = [        
    //   ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],        
    //   ['ETH', 2000, 3000, 5000, 4000, 3000, 940],        
    //   ['XRP', 100, 200, 300, 500, 400, 1300],      
    // ];   
  }

  // setBarChart = () => {      
  //   this.setState({        
  //     chartType: 'bar'      
  //   });    
  // }
  // setLineChart = () => {      
  //   this.setState({        
  //     chartType: 'line'     
  //   });   
  // }


  // componentDidMount() {      
  //   setTimeout(() => {        
  //     this.setState({
  //       notes: [...this.state.notes, ...notes2]        
  //     });      
  //   }, 10000);    
  // }
 

  render() {
    return (
      <div className="App">
        <Header title="calculator" />
        <Content>  
          <Person />          
        {/* <Chart              
          columns={this.columns}
          chartType={this.state.chartType}
        />
        <p>              
          Chart Type              
          <button onClick={this.setBarChart}>Bar</button>              
          <button onClick={this.setLineChart}>Line</button>            
        </p>            */}
        </Content> 
        <Footer /> 
      </div>
    );
  }

  componentWillUnmount() {    
    console.log('Hasta la vista baby!');    
    document.body.style = 'background: black;';    
    document.getElementById('unmountMessage').style.color = 'white';  
  }

}

export default App;
