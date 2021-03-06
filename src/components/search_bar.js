import React,{Component} from 'react';
//sytance sugar可以取到React的屬性
// const Component = React.Component;  

class SearchBar extends Component{
    constructor(props) { //all classes have constructor 建構式
        super(props); //綁入父層，可以使用其方法

        this.state = {term:''}; //初始化state
    }
    render(){
        // this.state.term = event.target.value; //bad
        return(
            <div className="search-bar">
                <input 
                    value={this.state.term} 
                    onChange={event=>this.onInputChange(event.target.value)}
                />
                {/* Value of the input:{this.state.term} */}
            </div>
        )
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;