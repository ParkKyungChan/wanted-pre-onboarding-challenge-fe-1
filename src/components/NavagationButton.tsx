import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../common/GlobalStyle';

interface AuthButtonProps {
  contents: string;
  navigateTarget: string;
  buttonWidth: string;
  buttonHeight: string;
  buttonColor: string;
}

const NavigationButton = ({ contents, navigateTarget, buttonWidth, buttonHeight, buttonColor }: AuthButtonProps) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(navigateTarget);
  };
  return (
    <S.ColoredButton width={buttonWidth} height={buttonHeight} color={buttonColor} onClick={clickHandler}>
      {contents}
    </S.ColoredButton>
  );
};

export default NavigationButton;
