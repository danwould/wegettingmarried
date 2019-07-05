import React from 'react'
import videoUrl from '../video/wedding-3.mp4'

const Video = () => (
  <div className='player-wrapper' dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${videoUrl}"
          className='react-player'
          width='100%'
          height='100%'
        />,
      ` }}>
  </div>
)

export default Video
