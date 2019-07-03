import React from 'react'
import videoUrl from '../video/wedding-3.mp4'

const Video = () => (
  <div className='player-wrapper'>
    <video
      autoPlay
      loop
      muted
      playsInline
      className='react-player'
      width='100%'
      height='100%'>
      <source src={videoUrl} type="video/mp4"/>
    </video>
  </div>
)

export default Video
