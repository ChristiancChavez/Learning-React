import React, { Component } from 'react'; 
import uuidv4 from 'uuid/v4';
import List from './List';
import './Todo.css';

class Todo extends Component {  
    constructor() {
        super();  
        this.state = {    
            task: '',
            items: []  
        }; 
    }

    

    componentWillMount() {
        let items = window.localStorage.getItem("items");
        items = items && JSON.parse(items);
        if(items) {
            this.setState({
                items
            })
        } else {
            const defaultItems = [      
                { 
                    id: uuidv4(),        
                    task: 'Pay the rent',       
                    completed: false      
                },      
                {        
                    id: uuidv4(),        
                    task: 'Go to the gym',        
                    completed: false      
                },      
                {        
                    id: uuidv4(),        
                    task: 'Do my homework',        
                    completed: false      
                }    
            ]
            window.localStorage.setItem("items",  JSON.stringify(defaultItems));
            this.setState({
                items: defaultItems
            })

        }
    }


    handleOnChange = e => { 
        const { target: { value } } = e;
        this.setState({     
            task: value    
        });  
    } 

    handleOnSubmit = e => {    
        e.preventDefault();
        if (this.state.task.trim() !== '') {
            const newItems = [          
                ...this.state.items,          
                {            
                    id: uuidv4(),            
                    task: this.state.task,
                    complete: false          
                }        
            ]
            window.localStorage.setItem("items",  JSON.stringify(newItems));
            this.setState({        
                task: '',        
                items: newItems       
            });    
        }  
    }

    removeTask = id => {    
        const filteredTasks = this.state.items.filter(task => task.id !== id);
        window.localStorage.setItem("items", JSON.stringify(filteredTasks))
        this.setState({      
            items: filteredTasks    
        });  
    }

    markAsCompleted = id => {    
        const foundTask = this.state.items.find(      
            task => task.id === id    
        );
        foundTask.completed = true;
        const completeItems = [        
            ...this.state.items,        
            ...foundTask      
        ]    
        window.localStorage.setItem("items", JSON.stringify(completeItems))
        this.setState({      
            items: completeItems
        });  
    } 

    
 

    render() {    
        return (      
            <div className="Todo">        
                <h1>New Task:</h1>     
                <form onSubmit={this.handleOnSubmit}>          
                    <input 
                        value={this.state.task}
                        onChange={this.handleOnChange}          
                    />
                </form>
                <List 
                    items={this.state.items} 
                    markAsCompleted={this.markAsCompleted} 
                    removeTask={this.removeTask}        
                />      
            </div> 

        );  
    } 
}
export default Todo;
