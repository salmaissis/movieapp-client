import Header from '../components/header/Header';
import MovieCard from '../components/movie-card/MovieCard';
import { category } from '../api/tmdbApi';



const Favorites = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const svedcategory = sessionStorage.getItem('category')
    console.log(favs);
    return (
        <>
            <Header/>
            {favs.map(item => <MovieCard item={item} category={category[svedcategory]}/>)}
        </>
    )
}

export default Favorites;