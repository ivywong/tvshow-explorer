import React, { Component } from 'react';
import ShowCard from './ShowCard';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those items. */
class ShowList extends Component {
    renderList() {
        const items = this.props.items.map(item => {
            return <ShowCard show={item} key={item.id} />
        });
        return items;
    }

    render() {
        return (
            <div> 
                <p className="show-list-info">{this.props.items.length} show(s) found.</p>
                <div className="show-list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default ShowList;
