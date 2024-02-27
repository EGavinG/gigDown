import './Track.css'

const Track = ({ artist, title }) => {

    return (
        <div className ='Track'>
            <p>{title}</p>
            <p>{artist}</p>
        </div>
    )
}

export default Track