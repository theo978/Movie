import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzJkYjgxZGU3ZGQwMTBiN2JkZDAyZDYzYzNmNjliMiIsIm5iZiI6MTcyOTY0MzI1NS4yNzIxOTgsInN1YiI6IjY3MTgyM2U5NzY5MTA3ZDc3YjQ3NDc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0qIRygIdAUAFdBxIqKi5CeH8oKF1hWbxiTjhwbxYdYE'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  },[])
  
  return (
    <div className='player' >
      <button className='player-arrow' onClick={()=>{navigate('/')}} >⬅️</button>
      <iframe className='player-iframe' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' 
      frameBorder="0" height={'90%'} width={'90%'}  allowFullScreen />
      <div className="player-infor">
        <p>{apiData.name}</p>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
