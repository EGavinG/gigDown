import './Tracklist.css'
import Track from '../Track/Track'
import { useState } from 'react'


const Tracklist = ({tracklist}) => {

  
    const trackCards = tracklist.map(track => {
        return (
          <Track
            img={track.img}
            id={track.id}
            title={track.title}
            artist={track.artist}
            key={track.id}
          />
        )
      })


    return (
        <div className ='Tracklist'>
            <h2 className='usb-title'>USB Library</h2>
          {!tracklist.length && <h3 className='message'>USB Library Empty -- Add Some Tracks!</h3>}
        <section className='tracklist-section'>
            {trackCards}
        </section>
        </div>
    )
}

export default Tracklist