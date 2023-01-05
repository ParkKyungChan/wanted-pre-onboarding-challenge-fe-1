import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserInput from '../components/UserInput';
import useInput from '../hooks/useInput';
import { LocalStorageIndex, RoutePath } from '../constants';
import { postLoginRequest } from '../API/auth';
import { loginValidator } from '../utils/auth';

const LogInPage = () => {
  const [isLoginButtonActive, setIsLoginButtonActive] = useState(false);
  const [email, onChangeIdInput] = useInput();
  const [password, onChangePwInput] = useInput();
  const navigate = useNavigate();

  const handleLoginButtonClick = async () => {
    if (!isLoginButtonActive) return;
    const userName = email.split('@')[0];
    const userToken = await postLoginRequest(email, password);
    if (!userToken) return;
    localStorage.setItem(LocalStorageIndex.TOKEN, userToken);
    localStorage.setItem(LocalStorageIndex.USERNAME, userName);
    navigate(RoutePath.ROOT);
  };

  useEffect(() => {
    setIsLoginButtonActive(loginValidator({ email, password })!.isValid);
  }, [email, password]);

  return (
    <>
      <LogInFormContainer>
        <LogInFormTitle>Login</LogInFormTitle>
        <InputList>
          <UserInput label="ID" color={'var(--color-main)'} type="text" onChangeHandler={onChangeIdInput} />
          <UserInput label="PW" color={'var(--color-main)'} type="password" onChangeHandler={onChangePwInput} />
        </InputList>
        <LoginButton isActive={isLoginButtonActive} onClick={handleLoginButtonClick}>
          Login
        </LoginButton>
      </LogInFormContainer>
    </>
  );
};

export default LogInPage;

const LogInFormContainer = styled.div`
  width: 30rem;
  height: 20rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: 1px solid var(--color-main);
  border-radius: 2rem;
`;

const LogInFormTitle = styled.div`
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-family: 'Work sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--color-main);
  border-radius: 1rem;
  transform: translate(0, -1.5rem);
  margin: auto;
`;

const InputList = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginButton = styled.button<{
  isActive: boolean;
}>`
  width: 14rem;
  height: 3rem;
  line-height: 3rem;
  margin: 1.5rem auto;
  padding: 0;
  border: 1px solid var(--color-main);
  border-radius: 1rem;
  font-family: 'Work sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => (props.isActive ? 'black' : 'gray')};
  background: ${(props) => (props.isActive ? 'var(--color-main)' : 'transparent')};
`;
