import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RoutePath, LocalStorageIndex } from '../constants';
import * as S from '../common/GlobalStyle';

interface AuthButtonProps {
  content: string;
  navigateTarget: string;
}

const GlobalNavigationBar = () => {
  const [isLoggedIn, setIsLiggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>('박경찬');
  const navigate = useNavigate();
  const titleClickHandler = () => {
    navigate(RoutePath.ROOT);
    setIsLiggedIn(!isLoggedIn);
  };
  useEffect(() => {
    if (localStorage.getItem(LocalStorageIndex.TOKEN)) {
      setIsLiggedIn(true);
      setUserName(localStorage.getItem(LocalStorageIndex.USERNAME));
    }
  });
  return (
    <GNBContainer>
      <LogoImage imageSrc="/logo.png" onClick={titleClickHandler} />
      <MainTitle onClick={titleClickHandler}>Wanted TodoList</MainTitle>
      <AuthContainer>{isLoggedIn ? <WelcomeComment> {userName}님 안녕하세요!</WelcomeComment> : <AuthButtonContainer />}</AuthContainer>
    </GNBContainer>
  );
};

export default GlobalNavigationBar;

const AuthButtonContainer = () => {
  return (
    <>
      <AuthButton content="로그인" navigateTarget={RoutePath.LOGIN}></AuthButton>
      <AuthButton content="회원가입" navigateTarget={RoutePath.SIGNUP}></AuthButton>
    </>
  );
};

const AuthButton = ({ content, navigateTarget }: AuthButtonProps) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(navigateTarget);
  };
  return (
    <S.ColoredButton width={'5rem'} height={'2rem'} color={'var(--color-main)'} onClick={clickHandler}>
      {content}
    </S.ColoredButton>
  );
};

const GNBContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthContainer = styled.div`
  width: 15rem;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LogoImage = styled.div<{
  imageSrc: string;
}>`
  background: url(${(props) => props.imageSrc}) no-repeat center center / 5rem 3rem;
  width: 15rem;
  height: 100%;
  padding: 0 5rem;
  cursor: pointer;
`;

const MainTitle = styled.span`
  margin: 4rem;
  color: var(--color-main);
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
`;

const WelcomeComment = styled.span`
  color: var(--color-main);
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Noto Sans', sans-serif;
`;
