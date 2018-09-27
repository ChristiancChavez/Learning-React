import React, { Component } from 'react';
import Result from './Result';
import './Number.css';

class Numbers extends Component {      
    state = {        
        numbers: '',         
        results: []       
    };

    handleNumberChange = e => {        
        const { target: { value } } = e;
        // "12345" => ["1", "2", "3", "4", "5"]        
        const numbers = Array.from(value);
        // ["1", "2", "3", "4", "5"] => 15        
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);
        this.setState({          
            numbers: value,          
            results: [...this.state.results, result]        
        });      
    }
    render() {        
        return (          
            <div className="Numbers">            
                <input type="number" value={this.state.numbers} onChange={this.handleNumberChange} placeholder="Write your numbers here"/>
                <ul>              
                    {this.state.results.map((result, i) => (                
                        <Result key={i} result={result} />
                    ))}            
                </ul>          
            </div>        
            )      
        }    
    }
export default Numbers;