import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            status: "All",
            network: "All",
            isSort: false,
            sort: "Unsorted"
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }
 
    onStatusDropdown = (event) => {
        this.setState({status: event});
    }   

    onNetworkDropdown = (event) => {
        this.setState({network: event});
    }

    // Sets the state whenever the user types on the search bar
    onSortSelect = (event) => {
        this.setState({sort: event, isSort: event !== "Unsorted"});
    }

    sortItem = (a, b) => {
        if (this.state.sort === "Name (A-Z)") {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
        else if (this.state.sort === "Name (Z-A)") {
            return -1*a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
        else if (this.state.sort === "Lowest Rated") {
            return a.rating.average - b.rating.average;
        }
        else if (this.state.sort === "Highest Rated") {
            return -1*(a.rating.average - b.rating.average);
        }
        else {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        return (item.name.toLowerCase().search(this.state.search) !== -1 
                || item.genres.find(item => { return item.toLowerCase().search(this.state.search) !== -1 }))
                && (this.state.status === "All" || item.status === this.state.status)
                && (this.state.network === "All" || 
                    (item.network && item.network.name === this.state.network) ||
                    (!item.network && this.state.network === "Netflix"));
    }


    render() {
        return (
            <div className="filter-list">
                <h1>TV Show Explorer</h1> 
                <div className="filter">
                    <div><input className="search" type="text" placeholder="Search for title or genre..." onChange={this.onSearch} /></div>
                    <div>
                    <DropdownButton id="sortDropdown" title={"Sort by: " + this.state.sort} onSelect={this.onSortSelect}>
                      <MenuItem eventKey="Unsorted">Unsorted</MenuItem>
                      <MenuItem eventKey="Name (A-Z)">Name (A-Z)</MenuItem>
                      <MenuItem eventKey="Name (Z-A)">Name (Z-A)</MenuItem>
                      <MenuItem eventKey="Lowest Rated">Lowest Rated</MenuItem>
                      <MenuItem eventKey="Highest Rated">Highest Rated</MenuItem>
                    </DropdownButton>
                    <DropdownButton id="typeDropdown" title={"Status: " + this.state.status} onSelect={this.onStatusDropdown}>
                      <MenuItem eventKey="All">All</MenuItem>
                      <MenuItem eventKey="Ended">Ended</MenuItem>
                      <MenuItem eventKey="Running">Running</MenuItem>
                      <MenuItem eventKey="To Be Determined">To Be Determined</MenuItem>
                    </DropdownButton>
                    
                    <DropdownButton id="networkDropdown" title={"Network: " + this.state.network} onSelect={this.onNetworkDropdown}>
                      <MenuItem eventKey="All">All</MenuItem>
                      <MenuItem eventKey="Netflix">Netflix</MenuItem>
                      {this.props.networks.map(network => {
                        return <MenuItem eventKey={network}>{network}</MenuItem>
                      })}
                    </DropdownButton>
                    </div>
                </div>

                {this.state.isSort ? (
                    <List items={this.props.items.filter(this.filterItem).sort(this.sortItem)} />
                ) : (
                    <List items={this.props.items.filter(this.filterItem)} />
                )}
            </div>
        );
    }
}
export default FilteredList;
