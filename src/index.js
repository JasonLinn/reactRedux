import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
//Create a new component. This component should produce
//some HTML
const App = function (){
    return <div>Hi!</div>
}

//Take this component's generated HTML and put it 
//on the page (in the DOM)


ReactDOM.render(<App/>);
=======

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCkXC9PJLcm_uzbLbyRTM1e-XmfddWKu2s";

const App = (params) =>{
    return( 
        <div>
            <SearchBar/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('.container'));
>>>>>>> a414747a4644ef22ca02ecbb9b81d0e9e1277ae5
