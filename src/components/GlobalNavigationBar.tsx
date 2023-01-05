import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RoutePath, LocalStorageIndex, ButtonContents } from '../constants';
import NavigationButton from './NavagationButton';

const GlobalNavigationBar = () => {
  const [isLoggedIn, setIsLiggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();
  const titleClickHandler = () => {
    navigate(RoutePath.ROOT);
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
      <UserContainer>{isLoggedIn ? <WelcomeComment> {userName}님 안녕하세요!</WelcomeComment> : <AuthButtonList />}</UserContainer>
    </GNBContainer>
  );
};

export default GlobalNavigationBar;

const AuthButtonList = () => {
  const authButtonStyle = {
    width: '5rem',
    height: '2rem',
    color: 'var(--color-main)',
  };
  return (
    <>
      <NavigationButton contents={ButtonContents.LOGIN} navigateTarget={RoutePath.LOGIN} buttonWidth={authButtonStyle.width} buttonHeight={authButtonStyle.height} buttonColor={authButtonStyle.color} />
      <NavigationButton contents={ButtonContents.SIGNUP} navigateTarget={RoutePath.SIGNUP} buttonWidth={authButtonStyle.width} buttonHeight={authButtonStyle.height} buttonColor={authButtonStyle.color} />
    </>
  );
};

const GNBContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserContainer = styled.div`
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
