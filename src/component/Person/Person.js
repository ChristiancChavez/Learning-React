import React, { Component } from 'react';  
import './Person.css';

class Person extends Component {    
    constructor() {      
        super();
    this.state = {        
        firstName: '',        
        lastName: '',        
        email: '',        
        phone: ''      
    };    
}
    render() {      
        return (        
            <div className="Person">
                <form>          
                    <div>            
                        <p><strong>First Name:</strong></p>            
                        <p><input name="firstName" type="text"  value={this.state.firstName}  /></p>          
                    </div>
                    <div>
                        <p><strong>Last Name:</strong></p>            
                        <p><input name="lastName" type="text"  value={this.state.lastName}  /></p>          
                    </div>
                    <div>            
                        <p><strong>Email:</strong></p>            
                        <p><input name="email" type="email"  value={this.state.email}  /></p>          
                    </div>
                    <div>            
                        <p><strong>Phone:</strong></p>            
                        <p><input name="phone" type="tel"  value={this.state.phone}  /></p>          
                    </div>
                    <p>            
                        <button>Save Information</button>          
                    </p>        
                </form>      
            </div>    
        ); 
    }  
}
export default Person;
