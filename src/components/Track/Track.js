import './Track.css'


const Track = ({ artist, album, title, img, onClick, tabIndex }) => {

    return (
        <section className ='Track' onClick={onClick} tabIndex={tabIndex}>
            <img src={img} className='album-border' alt={`${title} by ${artist}`}/>
            <p>{title}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </section>
    )
}

export default Track