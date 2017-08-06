import React,{Component} from 'react';
//sytance sugar可以取到React的屬性
// const Component = React.Component;  

class SearchBar extends Component{
    render(){
        return <input onChange={(event)=>console.log(event.target.value)}/>;
    }
    onInputChange(e){
        
    }
}

export default SearchBar;