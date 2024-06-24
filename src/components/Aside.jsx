import React, { useContext, useEffect, useState, useRef } from 'react';
import { MusicPlayerContext } from '../context/MusicPlayerProvider';
import { IoMusicalNotes, IoPlaySkipForward, IoPlaySkipBack, IoPlay, IoPause, IoRepeat, IoShuffleOutline, IoVolumeHigh } from 'react-icons/io5';
import ReactPlayer from 'react-player';

const Aside = ({ currentPlaylist, selectedPlaylistState }) => {
    const {
        musicData,
        currentTrackIndex,
        isPlaying,
        played,
        duration,
        playTrack,
        pauseTrack,
        nextTrack,
        prevTrack,
        updatePlayed,
        updateDuration,
        toggleShuffle,
        isShuffling,
        toggleRepeat,
        isRepeating,
        handleTrackEnd,
    } = useContext(MusicPlayerContext);

    const [trackList, setTrackList] = useState([]);
    const [volume, setVolume] = useState(0.8); // Initial volume level
    const currentTrackRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (currentTrackRef.current) {
            currentTrackRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentTrackIndex]);

    useEffect(() => {
        if (selectedPlaylistState) {
            setTrackList(currentPlaylist);
        }
    }, [currentPlaylist, selectedPlaylistState]);

    const handlePlayNow = (track) => {
        setTrackList([track]);
        playTrack(0);
    };

    const handleAddToList = (track) => {
        setTrackList((prevList) => [...prevList, track]);
    };

    const currentTrack = musicData[currentTrackIndex];

    const handleProgress = (state) => updatePlayed(state.played);
    const handleDuration = (duration) => updateDuration(duration);
    const handleSeekChange = (event) => updatePlayed(parseFloat(event.target.value));
    const handleSeekMouseUp = (event) => {
        if (playerRef.current) {
            playerRef.current.seekTo(parseFloat(event.target.value));
        }
    };

    const handleVolumeChange = (event) => {
        setVolume(parseFloat(event.target.value));
        if (playerRef.current) {
            playerRef.current.setVolume(parseFloat(event.target.value));
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleTrackEndModified = () => {
        if (isRepeating) {
            if (playerRef.current) {
                playerRef.current.seekTo(0);
            }
            playTrack(currentTrackIndex);
        } else {
            handleTrackEnd();
        }
    };

    return (
        <aside id="aside">
            <div className="play-now">
                <h2>
                    <IoMusicalNotes /> play
                </h2>
                <div className="thumb">
                    <div
                        className="img"
                        style={{
                            backgroundImage: currentTrack ? `url(${currentTrack.imageURL})` : 'none',
                        }}
                    >
                        <div className='thumb_video'>
                            {currentTrack && (
                                <ReactPlayer
                                    ref={playerRef}
                                    url={`https://www.youtube.com/watch?v=${currentTrack.videoID}`}
                                    controls={false}
                                    width="100%"
                                    height="100%"
                                    playing={isPlaying}
                                    onEnded={handleTrackEndModified}
                                    onProgress={handleProgress}
                                    onDuration={handleDuration}
                                    volume={volume}
                                />
                            )}
                        </div>
                    </div>
                    {currentTrack ? (
                        <>
                            <span className="title">{currentTrack.title}</span>
                            <span className="artist">{currentTrack.artist}</span>
                        </>
                    ) : (
                        <>
                            <span className="title">재생중인 노래가 없습니다.</span>
                            <span className="artist">노래를 추가해주세요.</span>
                        </>
                    )}
                </div>

                <div className="progress">
                    <div className="progress-bar">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={played}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekMouseUp}
                            style={{
                                background: `linear-gradient(90deg, #5779FF ${played * 100}%, #ccc ${played * 100}%)`,
                                height: '4px',
                                width: '100%',
                                borderRadius: '4px',
                                appearance: 'none',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div className="times">
                        <span className="current-time">{formatTime(played * duration)}</span>
                        <span className="total-time">{formatTime(duration)}</span>
                    </div>
                    <div className="controls">
                        <span className={`shuffle ${isShuffling ? 'active' : ''}`} onClick={toggleShuffle}>
                            <IoShuffleOutline />
                        </span>
                        <span className="prev" onClick={prevTrack}>
                            <IoPlaySkipBack />
                        </span>
                        <span className="play bg" onClick={isPlaying ? pauseTrack : () => playTrack(currentTrackIndex)}>
                            {isPlaying ? <IoPause /> : <IoPlay />}
                        </span>
                        <span className="next" onClick={nextTrack}>
                            <IoPlaySkipForward />
                        </span>
                        <span className={`repeat ${isRepeating ? 'active' : ''}`} onClick={toggleRepeat}>
                            <IoRepeat />
                        </span>
                    </div>
                    <div className="volume-control" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                        <IoVolumeHigh style={{ marginRight: '10px' }} />
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            style={{
                                background: `linear-gradient(90deg, #5779FF ${volume * 100}%, #ccc ${volume * 100}%)`,
                                height: '4px',
                                width: '50%',
                                borderRadius: '4px',
                                appearance: 'none',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="play-list">
                <h3><IoMusicalNotes /> Play list</h3>
                <ul>
                    {musicData.map((track, index) => (
                        <li
                            key={index}
                            ref={index === currentTrackIndex ? currentTrackRef : null}
                            onClick={() => playTrack(index)}
                            className={index === currentTrackIndex ? 'current-track' : ''}
                        >
                            <span className="img" style={{ backgroundImage: `url(${track.imageURL})` }}></span>
                            <span className="title">{track.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
