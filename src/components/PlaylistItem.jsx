import React from 'react';
import { IoPlayCircle } from 'react-icons/io5';

const PlaylistItem = ({ item, onPlay }) => {
  return (
    <div className="playlist-item">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${item.videoID}`}
        title={item.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="title">{item.title}</div>
      <div className="artist">{item.artist}</div>
      <IoPlayCircle 
        style={{ marginTop: '5px', fontSize: '24px', color: '#5779FF', cursor: 'pointer' }} 
        onClick={onPlay}
      />
    </div>
  );
};

export default PlaylistItem;
