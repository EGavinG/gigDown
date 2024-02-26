import './Tracklist.css'
import { useState } from 'react'

const Tracklist = () => {

    const trackListData = [
        { id: 1, title: 'Rewind', Artist: 'Kelela', Album: 'Hallucinogen' },
        { id: 2, title: 'Eternity', Artist: 'Mondo Grosso', Album: 'Self-Titled' },
        { id: 3, title: 'To Dawn', Artist: 'Tetsuya Numora', Album: 'FFX OST' },
        ]

    const [tracklist, setTracklist] = useState([trackListData])



    return (
        <div className ='Tracklist'>
            
        </div>
    )
}

export default Tracklist