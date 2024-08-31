import React from 'react'

const Video = () => {
  return (
    <div className="w-{100%} h-auto overflow-hidden">
       <video
        src="/assets/KOMODO (1580 x 450 px) (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-{100%} h-auto object-cover"
      />
    </div>
  )
}

export default Video