import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background: #EB9B00;
  padding: .8em 2em;
  border: 2px solid #EB9B00;
  color: #FFFFFF;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #BB7900;
    border: 2px solid #BB7900;
  }
`

const AbBotao: React.FC = () => {
  return(
    <BotaoEstilizado>Clique aqui!</BotaoEstilizado>
  );
}

export default AbBotao;
