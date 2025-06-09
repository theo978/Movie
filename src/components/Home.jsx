// Home.js
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import TitleCards from '../titleCards/TitleCards'


const Home = () => {

  return (
    <>
      <NavBar />
      <div className='home'>
        <TitleCards title={'Blockbuster Movies'} category={'now_playing'} />
        <TitleCards title={'Popular'} category={'popular'} />
        <TitleCards title={'Top rated'} category={'top_rated'} />
        <TitleCards title={'For you'} category={'upcoming'} />
      </div>
    </>
  )
}

export default Home