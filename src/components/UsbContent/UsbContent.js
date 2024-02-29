import './UsbContent.css'
import { useState } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import TrackDisplay from '../Track-Display/Track-Display'
import Image from '../../255-200.png';

const Main = () => {

    const trackListData = [
        { id: 1, title: 'Rewind', artist: 'Kelela', album: 'Hallucinogen', img: Image },
        { id: 2, title: 'Eternity', artist: 'Mondo Grosso', album: 'Self-Titled', img: Image },
        { id: 3, title: 'To Dawn', artist: 'Tetsuya Numora', album: 'FFX OST', img: Image },
        { id: 4, title: 'Belive Me', artist: 'Erika De Casier', album: 'Still', img: Image },
        { id: 5, title: 'Love You So Much - So Much Edit', artist: 'Paul Johnson', album: 'So Much Single', img: Image },
        { id: 6, title: 'GirlFX', artist: 'Mabel', album: 'Pleasure Phonetix', img: Image },
        { id: 7, title: 'Gotta Let You Go Tonka Mix', artist: 'DJ Tonka', album: 'Gotta Let You Go', img: Image },
        { id: 8, title: 'Minimal DJ Koze Remix', artist: 'Matias Aguayo', album: 'Minimal', img: Image },
        { id: 9, title: 'Memories', artist: 'Fireground', album: 'Memories', img: Image },
        { id: 10, title: 'Booty Must B... ', artist: 'DJ Deeon', album: 'sdf', img: Image },
        { id: 11, title: 'Gedup (And Move Your Butt)', artist: 'Sweely', album: 'Gedup (And Move Your Butt)', img: Image },
        { id: 12, title: 'So Sweet', artist: 'Regularfantasy', album: 'So Sweet', img: Image },
        { id: 13, title: 'Wings of Desire', artist: 'Strawpeople', album: 'World Service', img: Image },
        { id: 14, title: 'Hold My Hand Octa Octa Edit', artist: 'Lady Blacktronika', album: 'Trablonika Daly EP', img: Image },
        { id: 15, title: 'Installation', artist: 'Pangea', album: 'Installation', img: Image },
        { id: 16, title: 'Cmon N Ride It', artist: 'Quad City DJs', album: 'sdf', img: Image },
        { id: 17, title: 'Creature a/jus/ted Dub', artist: 'Kim Ann Foxman', album: 'Creature', img: Image },
        { id: 18, title: 'It Aint Over', artist: 'DJ HEARTSTRING', album: 'sdf', img: Image },
        { id: 19, title: 'I Want You', artist: 'DJ Blush', album: 'Single', img: Image },
        { id: 20, title: 'DARE EDIT', artist: 'OSSX', album: 'TRICKY', img: Image },
        { id: 21, title: 'PUSH IT', artist: 'OZZA', album: 'sdf', img: Image },
        { id: 22, title: 'Omeed Norouzi X Betonkust', artist: 'Henry R', album: 'Blends Comp', img: Image },
        { id: 23, title: 'Nu Feeling', artist: 'Arden', album: 'Novaj', img: Image },
        { id: 24, title: 'UR LUV', artist: 'Client 03', album: 'Single', img: Image },
        { id: 25, title: 'Rave 4 Love', artist: '9999999', album: 'Unknown', img: Image },
        { id: 26, title: 'In Da Club', artist: 'DJ Rashad', album: 'Unknown', img: Image },
        { id: 27, title: 'Sugar', artist: 'Turk Turkelton', album: 'Single', img: Image },
        { id: 28, title: 'Coolie Joyride', artist: 'Spooky', album: 'Joyride EP', img: Image },
        { id: 29, title: 'Bring Dat Bak', artist: 'Tre Oh Fie', album: 'Remix', img: Image },
        { id: 30, title: 'NO ORDINDARY LOVE 91', artist: 'Akash', album: 'Edit', img: Image }
        ]

        const [tracklist, setTracklist] = useState(trackListData);
        const [selectedTrack, setSelectedTrack] = useState(null);
      
        return (
          <div className="Main">
            <main>
              <Tracklist tracklist={tracklist} setSelectedTrack={setSelectedTrack} />
              <TrackDisplay selectedTrack={selectedTrack || {}} />
            </main>
          </div>
        );
}

export default Main;