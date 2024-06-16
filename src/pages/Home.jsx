import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/uni.jpg'; // 이미지 경로를 실제 경로로 변경

const Home = () => {
  return (
    <Background>
      <TitleOverlay>
        <Title></Title>
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
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
`;
