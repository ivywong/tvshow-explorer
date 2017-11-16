import React, { Component } from 'react';
import './css/App.css';
import FilteredList from './FilteredList';
import shows from './shows.json';

// generate list of networks from json data
const networks = Array.from(new Set(shows.map(function(item) {
    if (item.network) {
        return item.network.name;
    }
}))).filter(function(item) { return item; }).sort();

class App extends Component {
    render() {
        return (
            <div className="App"> 
                <FilteredList items={shows} networks={networks}/>
            </div>
        );
    }
}

export default App;
