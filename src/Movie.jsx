import React, { Component } from 'react';

class Movie extends Component {
    constructor(props){
        super(props);

        this.state = null;

    }

    componentDidMount(){
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?order=by-opening-date&api-key=vAzjqzuOZeLf1U7MEsdtbCgq9myDJld1')
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data');
            }
            return res.json();
        })
        .then(data =>{
            
            this.setState(data);
            console.log("datum", this.state.results);
        })
        .catch(err=>{
            return console.log(err.message);
        })
    }
    
    render() {
        return( this.state &&
            this.state.results.map((review, index )=>{
                return(
                    <div className="card" key={index}>
                        <div className="img-div">
                            <img src={review.multimedia.src} alt="movie" />                        
                        </div>
                        <div className="detail-div">
                            <h4>{review.display_title}</h4>
                            <hr />
                            <p>{review.headline}</p>
                            <p><span>Critics Pick:</span>{review.critics_pick}</p>
                            <p><span>Byline:</span>{review.byline}</p>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default Movie;

