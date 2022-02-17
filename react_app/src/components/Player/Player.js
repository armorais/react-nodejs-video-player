import React from 'react';
import ReactPlayer from 'react-player/file';
import { api_base } from '../../config';
import './Player.css';

export default function Player() {

    const [sources, setSources] = React.useState({"empty":"true","dir":[]});

    React.useEffect(() => {
      fetchData();
    }, []);
    
    const fetchData = () => {
      fetch(api_base)
        .then((response) => response.json())
        .then((data) => {
          setSources(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    function onSelectSrc(event) {
      let video = event.target.value;
      if (!video.includes("https")) {
        video = 'hls/static/streams/' + video + '/playlist.m3u8';
      }
    
      setSrc(video);
    }
    const [src, setSrc] = React.useState('');
    
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <select value="none" onChange={onSelectSrc}>
          <option value=""></option>
          <option value="https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8">Big Buck Bunny HLS</option>
            {sources.dir.map(stream => (
              <option value={stream}>{stream}</option>
            ))}
          </select>
        </div>        
        </header>
          <div className='player-wrapper'>
            <ReactPlayer className='react-player'
                        url={src}
                        volume={1}
                        muted={true}
                        controls={true}
                        playing= {true}
                        width='80%'
                        height='80%' />
          </ div>
      </div>
    );    
}
