import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoriteActions';
import { useParams} from 'react-router-dom';
const FavoriteMovieList = (props) => {
    
const {id} = useParams();
    const favorites = props.favorites;
    const favorite= favorites.find(favorite=>favorite.id===Number(id));

    const handleRemove = () =>{
        removeFavorite(favorite.id)
        console.log(favorite.id)
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={handleRemove}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return{
       favorites: state.favoriteReducer.favorites
    }
}

export default connect(mapStateToProps,{removeFavorite})(FavoriteMovieList);