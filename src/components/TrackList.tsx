import React from 'react';
import {IState as IProps} from '../App';

const TrackList: React.FC<IProps> = ({tracks}) => {

  const renderList = () => {
    return tracks.map(el=>(
      <li key={el.title}>
          <p>Artist: {el.artist}</p>
          <p>Album: {el.album}</p>
          <p>Bassist: {el.bassist}</p>
          <p>Year: {el.year}</p>
          <p>Title: {el.title}</p>
          <a 
            href={el.link} target="_blank" rel="noreferrer">Link: {el.link}
          </a>
      </li>
  ))
  }

  return (
      <ul>
        {renderList()}
      </ul>
    )
}

export default TrackList;
