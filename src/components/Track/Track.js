import './Track.css'
import Image from '../../255-200.png'

const Track = ({ artist, title, img }) => {
console.log(img)
    return (
        <div className ='Track'>
            <img src={Image} alt={`${title} by ${artist}`} />
            <p>{title}</p>
            <p>{artist}</p>
        </div>
    )
}

export default Track