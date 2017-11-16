import React, { Component } from 'react';

class ShowCard extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><h4>{this.props.show.name + " (" + this.props.show.premiered.split("-")[0] + ")"}</h4></div>
                <div className="panel-body">
                    <div className="show-image">
                        <img src={this.props.show.image.medium} alt={this.props.show.name}></img>
                    </div>
                    <div className="show-info">
                        <div className="btn-group">
                            {this.props.show.genres.map(genre => {
                                return <li className="btn btn-info btn-xs tag">{genre}</li>
                            })}
                        </div>
                        <p>Rating: <b>{this.props.show.rating.average}</b></p>
                        <p>{this.props.show.summary.replace(/<(?:.|\n)*?>/gm, '')}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCard;
