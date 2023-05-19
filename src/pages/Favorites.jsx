import Header from '../components/header/Header';
import MovieCard from '../components/movie-card/MovieCard';
import './favorites.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { category } from '../api/tmdbApi';



const Favorites = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const svedcategory = sessionStorage.getItem('category')
    console.log(favs);
    return (
        <>
            <Header/>
            <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={50}
                slidesPerView={'auto'}
            >
            {
                favs.map((item, i) => (
                    <SwiperSlide key={i}>
                        <MovieCard item={item} category={category[svedcategory]}/>
                    </SwiperSlide>
                ))
           }
           </Swiper>
           </div>
            
        </>
    )
}

export default Favorites;