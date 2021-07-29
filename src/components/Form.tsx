import React, {useState} from 'react';
import {IState as Props} from '../App';

interface IProps {
  tracks: Props['tracks']
  setTrack:  React.Dispatch<React.SetStateAction<Props['tracks']>>
}
const Form: React.FC<IProps> = ({tracks, setTrack}) => {
  const [input, setInput] = useState({
    artist:'',
    album: '',
    bassist:'',
    year:'',
    title: '',
    link: ''
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();
    setTrack([...tracks, input]);
    setInput({
      artist:'',
      album: '',
      bassist:'',
      year:'',
      title: '',
      link: ''
    })
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text' 
          placeholder='artist' 
          value={input.artist} 
          onChange={handleChange}
          name='artist'/>
        <input 
          type='text' 
          placeholder='album' 
          value={input.album} 
          onChange={handleChange}
          name='album'/>
        <input 
          type='text' 
          placeholder='bassist' 
          value={input.bassist} 
          onChange={handleChange}
          name='bassist'/>
        <input 
          type='text' 
          placeholder='year' 
          value={input.year} 
          onChange={handleChange}
          name='year'/>
        <input 
          type='text' 
          placeholder='title' 
          value={input.title} 
          onChange={handleChange}
          name='title'/>
        <input 
          type='text' 
          placeholder='link' 
          value={input.link} 
          onChange={handleChange}
          name='link'/>
        <button>add to list</button>
      </form>
    </div>
  )
}
export default Form;