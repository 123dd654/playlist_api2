import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/uni.jpg'; // 이미지 경로를 실제 경로로 변경

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('/list_data/seoyeon.json')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching JSON data:', error));
  }, []);

  return (
    <Background>
      <TitleOverlay>
        <Title>서연이의 리스트</Title>
        <SongList>
          {songs.map(song => (
            <SongItem key={song.rank}>
              <Rank>{song.rank}</Rank>
              <Image src={song.imageURL} alt={song.title} />
              <Details>
                <SongTitle>{song.title}</SongTitle>
                <Artist>{song.artist}</Artist>
              </Details>
            </SongItem>
          ))}
        </SongList>
      </TitleOverlay>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleOverlay = styled.div`
  position: absolute;
  top: 114px;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
`;

const SongItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`;

const Rank = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
`;

const Details = styled.div`
  text-align: left;
`;

const SongTitle = styled.p`
  margin: 0;
  font-weight: bold;
  color: #333;
`;

const Artist = styled.p`
  margin: 0;
  color: #666;
`;
