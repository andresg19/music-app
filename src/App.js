import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Roxanne",
      artist: "The Police",
      img_src: "./images/song1thepo.webp",
      src: "./music/The-Police-Roxanne.mp3"
    },
    {
      title: "Little Wing",
      artist: "Jimi Hendrix",
      img_src: "./images/song2jimi.webp",
      src: "./music/The-Jimi-Hendrix-Experience-Little-Wing.mp3"
    },
    {
      title: "Brain Damage",
      artist: "Pink Floyd",
      img_src: "./images/song3pink.webp",
      src: "./music/Brain Damage.mp3"
    },
    {
      title: "Been down so Long",
      artist: "The Doors",
      img_src: "./images/the doors.webp",
      src: "./music/Been down so Long.mp3"
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex}
        setNextSongIndex={setNextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;

