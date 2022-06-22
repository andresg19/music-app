import React, {useState, useRef, useEffect} from 'react'
import Controls from './PlayerControls';
import Details from './PlayerDetails';
import PlayList from './PlayList';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const allSongs = useState(props.songs);
    console.log('props current', props.currentSongIndex)
    console.log('allSongs', allSongs)
    

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }
    
    const ChooseSong = (e) => {
        e.preventDefault()
        let filterSongs = props.songs.filter(s => s.title === e.target.value)
        let index = [];
        // let nextSong = []
        let reloadSong = allSongs[0].indexOf(filterSongs[0]);
        index.push(reloadSong)
        // nextSong.push(reloadSong + 1)
        props.setCurrentSongIndex(index)
        // props.setNextSongIndex(reloadSong + 1)
        setIsPlaying(true)
        console.log('reload', reloadSong)
        console.log('soy index', index)
        console.log('soy filter', filterSongs)
        console.log('soy current', props.currentSongIndex)
        // console.log('soy next', nextSong)
        
        
    }
    
    
    return (
        // onChange={(e) => ChooseSong(e)}
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            
            <h4>Choose your song</h4>
            <select  onChange={(e) => ChooseSong(e)}>
                {allSongs[0]?.map((s) =>(
                   <option value={s.title}>
                       {s.title}
                   </option>  
                ))}
            </select>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
        </div>
    )
}

export default Player;