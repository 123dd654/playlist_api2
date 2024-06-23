import React from 'react';

const PlaylistItem = ({ item }) => {
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
    </div>
  );
};

export default PlaylistItem;
