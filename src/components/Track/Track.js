import './Track.css'


const Track = ({ artist, album, title, img, onClick }) => {

    return (
        <section className ='Track' onClick={onClick}>
            <img src={img} alt={`${title} by ${artist}`} />
            <p>{title}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </section>
    )
}

export default Track