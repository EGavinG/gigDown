import './Checklist.css'

const Checklist = ({checklist}) => {
    if (!checklist || Object.keys(checklist).length === 0) {
        return <h3 className='display-message'>No Tracks To Currently Download!</h3>;
      }

    return (
      <div className='Checklist'>
          <h2 className='checklist-title'>Download Checklist</h2>
        <ol className ='checklist-section'>
        <section className='list'>
         {checklist.map((track, index) => (
        <li key={index}>
          <p className='text'>Title:{track.title}</p>
          <p className='text'>Artist:{track.artist}</p>
          <p className='text'>Album:{track.album}</p>
          <p className='text'>Genre:{track.genre}</p>
          <p className='text'>Track:{track.bpm}</p>
          <p className='text'>Key:{track.key}</p>
          <p className='text'>Duration:{track.duration}</p>
          <p className='text'>Downloaded:{track.downloaded}</p>
        </li>
      ))}
      </section>  
        </ol>
        </div>
    )
}

export default Checklist