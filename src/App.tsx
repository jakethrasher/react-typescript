import React, { useState }from 'react';
import './App.css';
import Form from './components/Form';
import TrackList from './components/TrackList';

interface IState{
  tracks: {
    artist:string
    album: string
    bassist:string
    year: number
    title: string
    link:string
  }[]
}
function App() {
  const [tracks, setTrack] = useState<IState['tracks']>([{
    artist:'Tower of Power',
    album: 'Tower of Power',
    bassist: 'Rocco Prestia',
    year:1973,
    title:'What is Hip',
    link: 'https://www.youtube.com/watch?v=oAatPPEaZDA'
  }]);
  
  return (
    <div>
      <h1>A curated list of cool basslines</h1>
      <TrackList tracks={tracks}/>
      <Form/>
    </div>
  );
}

export default App;
