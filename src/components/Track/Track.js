import './Track.css'



const Track = ({ artist, album, title, img, onClick, tabIndex }) => {
    console.log(img)

    return (
        <section className ='Track' onClick={onClick} tabIndex={tabIndex}>
            <img src={`http://localhost:3001/${img}`} className='album-border' alt={`${title} by ${artist}`}/>
            <p>{title}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </section>
    )
}

export default Track