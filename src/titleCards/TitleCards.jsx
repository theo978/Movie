import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const TitleCards = (props) => {

    const {title, category} = props;
    

    const cardRef = useRef();
    const [apiData, setApiData] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzJkYjgxZGU3ZGQwMTBiN2JkZDAyZDYzYzNmNjliMiIsIm5iZiI6MTcyOTY0MzI1NS4yNzIxOTgsInN1YiI6IjY3MTgyM2U5NzY5MTA3ZDc3YjQ3NDc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qIRygIdAUAFdBxIqKi5CeH8oKF1hWbxiTjhwbxYdYE'
        }
      };
      
      

    useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));

        const handleWheel = (e)=>{
            e.preventDefault();
            cardRef.current.scrollLeft += deltaY;
        }
        cardRef.current.addEventListener('wheel', handleWheel);
    },[])

  return (
    <div className='title-card'>
    <h2 className='t-h2' >{title?title: `Populor on Netfix`}</h2>
        <div ref={cardRef} >
            {apiData.map((card,index)=>(
                <Link to={`/player/${card.id}`} className={'movie-list no-underLine'} key={index} >
                    <img className='movie-img' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} />
                    <p className='t-p' >{card.original_title}</p>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default TitleCards
