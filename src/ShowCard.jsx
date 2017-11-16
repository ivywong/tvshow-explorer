import React, { Component } from 'react';

class ShowCard extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><h4><a href={this.props.show.officialSite || this.props.show.url}>{this.props.show.name + " (" + this.props.show.premiered.split("-")[0] + ")"}</a></h4></div>
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
                        <p>{this.props.show.summary.replace(/<(?:.|\n)*?>/gm, '')}</p>
                        <a href={this.props.show.officialSite || this.props.show.url} className="btn btn-info show-more">Learn more...</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCard;
