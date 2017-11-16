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
        if (this.state.sort === "nameAscending") {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
        else if (this.state.sort === "nameDescending") {
            return -1*a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
        else if (this.state.sort === "ratingAscending") {
            return a.rating.average - b.rating.average;
        }
        else if (this.state.sort === "ratingDescending") {
            return -1*(a.rating.average - b.rating.average);
        }
        else {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        return (item.name.toLowerCase().search(this.state.search) !== -1 
                || item.genres.find(item => { console.log(item); return item.toLowerCase().search(this.state.search) !== -1 }))
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
                    <DropdownButton id="sortDropdown" title={"Sort by: " + this.state.sort} onSelect={this.onSortSelect}>
                      <MenuItem eventKey="Unsorted">Unsorted</MenuItem>
                      <MenuItem eventKey="nameAscending">Name Asc.</MenuItem>
                      <MenuItem eventKey="nameDescending">Name Desc.</MenuItem>
                      <MenuItem eventKey="ratingAscending">Rating Asc.</MenuItem>
                      <MenuItem eventKey="ratingDescending">Rating Desc.</MenuItem>
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
                    <input className="search" type="text" placeholder="Search" onChange={this.onSearch} />
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
