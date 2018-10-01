import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import App from './component/App'; 
import About from './component/About'; 
import Contact from './component/Contact'; 
import Home from './component/Home'; 
import Error404 from './component/Error/404';
import Notes from './component/Notes';


const AppRoutes = () => (  
    <App>    
        <Switch>      
            <Route path="/" component={Home} exact />      
            <Route path="/about" component={About} exact />      
            <Route path="/contact" component={Contact} exact />    
            <Route path="/notes" component={Notes} exact />  
            <Route path="/notes/:noteId" component={Notes} exact />
            <Route component={Error404} />    
        </Switch>  
    </App> 
);
export default AppRoutes; 
