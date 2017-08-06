import React from 'react';
import ReactDOM from 'react-dom';

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