import React, { useEffect, useState } from 'react'
import { API_KEY,image_url} from '../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [Movie, setMovie] = useState()

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response) => {
      console.log(Response.data.results[0])
      setMovie(Response.data.results[0])

    })
  }, [])
  return (
    
    <div
    style={{backgroundImage:`url(${Movie ?image_url+ Movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='contents'>
        <h1 className='title'>{Movie? Movie.title : ""} </h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='discription'>{Movie?Movie.overview:""}</h1>


      </div>
      <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner