import React from 'react'
import ReactPlayer from 'react-player'
import tutorial from '../../images/tutorial.mp4'
import './Tutorail.css'
function Tutorial() {
  return (
    <div className='tut-main' >
        <div>
        <ReactPlayer url={tutorial} controls={true} />
        </div>
    </div>
  )
}

export default Tutorial