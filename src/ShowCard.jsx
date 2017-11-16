import React, { Component } from 'react';

/*
 * Component for displaying show information 
 */
class ShowCard extends Component {
    render() {
        // get necessary information based on json data
        var website = this.props.show.officialSite || this.props.show.url;
        var year = this.props.show.premiered.split("-")[0];
        var header = this.props.show.name + " (" + year + ")"; 

        // remove HTML tags from summary
        var cleanSummary = this.props.show.summary.replace(/<(?:.|\n)*?>/gm, '');
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><h4><a href={website}>{header}</a></h4></div>
                <div className="panel-body">
                    <div className="show-image">
                        <img src={this.props.show.image.medium} alt={this.props.show.name}></img>
                    </div>
                    <div className="show-info">
                        <div className="btn-group">
                            {this.props.show.genres.map(genre => {
                                return <li className="btn btn-warning btn-xs tag">{genre}</li>
                            })}
                        </div>
                        <p>Rating: <b>{this.props.show.rating.average}</b></p>
                        <p>{cleanSummary}</p>
                        <a href={website} className="btn btn-info show-more">Learn more...</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCard;
