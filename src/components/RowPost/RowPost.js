
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { image_url, API_KEY } from '../constants/constants'
import axios from '../../axios'
function RowPost(props) {
  const [Movies, setMovie] = useState([])
  const [urlid, seturlid] = useState("")

  useEffect(() => {
    axios.get(props.url).then(responce => {
      console.log(responce.data);
      setMovie(responce.data.results)
    }).catch(err => {
      // alert('network error')
    })
  }, [props.url])

  const opts = {
    height: '160',
    width: '290',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      
      
    },
  };
  const handlemovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response => {
      if (Response.data.results.length !== 0) {
        seturlid(Response.data.results[0])
      } else {
        console.log('array empty')
      }
    })


  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {Movies.map((obj) =>

          <img onClick={() => handlemovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${image_url + obj.backdrop_path}`} />

        )}
      </div>
      { urlid&& <  YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default RowPost