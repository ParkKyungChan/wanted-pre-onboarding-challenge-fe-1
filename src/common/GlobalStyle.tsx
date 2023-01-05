import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    background: linear-gradient(100deg, #575656, #062e3f);
    width: 100vw;
    height: 100vh;
    }
`;

export const ColoredButton = styled.button<{
  width: string;
  height: string;
  color: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 1rem;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  line-height: ${(props) => props.height};
  background: ${(props) => props.color};
  cursor: pointer;
`;
