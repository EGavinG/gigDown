import './Main.css'
import { useState } from 'react'
import Tracklist from '../Tracklist/Tracklist'

const Main = () => {

    const trackListData = [
        { id: 1, title: 'Rewind', artist: 'Kelela', album: 'Hallucinogen' },
        { id: 2, title: 'Eternity', artist: 'Mondo Grosso', album: 'Self-Titled' },
        { id: 3, title: 'To Dawn', artist: 'Tetsuya Numora', album: 'FFX OST' },
        { id: 4, title: 'Belive Me', artist: 'Erika De Casier', album: 'Still'},
        { id: 5, title: 'Love You So Much - So Much Edit', artist: 'Paul Johnson', album: 'So Much Single'},
        { id: 6, title: 'GirlFX', artist: 'Mabel', album: 'Pleasure Phonetix'},
        { id: 7, title: 'Gotta Let You Go Tonka Mix', artist: 'DJ Tonka', album: 'Gotta Let You Go'},
        { id: 8, title: 'Minimal DJ Koze Remix', artist: 'Matias Aguayo', album: 'Minimal'},
        { id: 9, title: 'Memories', artist: 'Fireground', album: 'Memories'},
        { id: 10, title: 'Booty Must B... ', artist: 'DJ Deeon', album: 'sdf'},
        { id: 11, title: 'Gedup (And Move Your Butt)', artist: 'Sweely', album: 'Gedup (And Move Your Butt)'},
        { id: 12, title: 'So Sweet', artist: 'Regularfantasy', album: 'So Sweet'},
        { id: 13, title: 'Wings of Desire', artist: 'Strawpeople', album: 'World Service'},
        { id: 14, title: 'Hold My Hand Octa Octa Sapphic Trails Edit', artist: 'Lady Blacktronika', album: 'Trablonika Daly EP'},
        { id: 15, title: 'Installation', artist: 'Pangea', album: 'Installation'},
        { id: 16, title: 'Cmon N Ride It', artist: 'Quad City DJs', album: 'sdf'},
        { id: 17, title: 'Creature a/jus/ted Dub', artist: 'Kim Ann Foxman', album: 'Creature'},
        { id: 18, title: 'It Aint Over', artist: 'DJ HEARTSTRING', album: 'sdf'},
        { id: 19, title: 'I Want You', artist: 'DJ Blush', album: 'Single'},
        { id: 20, title: 'DARE EDIT', artist: 'OSSX', album: 'TRICKY'},
        { id: 21, title: 'PUSH IT', artist: 'OZZA', album: 'sdf'},
        { id: 22, title: 'Omeed Norouzi X Betonkust X 265347381', artist: 'Henry R', album: 'Blends Comp'},
        { id: 23, title: 'Nu Feeling', artist: 'Arden', album: 'Novaj'},
        { id: 24, title: 'UR LUV', artist: 'Client 03', album: 'Single'},
        { id: 25, title: 'Rave 4 Love', artist: '9999999', album: 'Unknown'},
        { id: 26, title: 'In Da Club', artist: 'DJ Rashad', album: 'Unknown'},
        { id: 27, title: 'Sugar', artist: 'Turk Turkelton', album: 'Single'},
        { id: 28, title: 'Coolie Joyride', artist: 'Spooky', album: 'Joyride EP'},
        { id: 29, title: 'Bring Dat Bak', artist: 'Tre Oh Fie', album: 'Remix'},
        { id: 30, title: 'NO ORDINDARY LOVE 91', artist: 'Akash', album: 'Edit'}
        ]

    const [tracklist, setTracklist] = useState(trackListData)

    return (
        <div className='Main'> 
            <main>
                <h1>gigDown</h1>
                <Tracklist tracklist={tracklist}/>
            </main>
        </div>
    )
}

export default Main;