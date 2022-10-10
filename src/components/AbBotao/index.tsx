import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  text?: string
  tipo?: 'primario' | 'secundario'
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
  padding: .8em 2em;
  border: 2px solid #EB9B00;
  color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  ${(props: AbBotaoProps) => props.tipo === 'primario'
    ? css`
        &:hover {
          background: #BB7900;
          border: 2px solid #BB7900;
        }
      `
    : css`
        &:hover {
          background: #FFF;
          border: 2px solid #BB7900;
          color: #BB7900;
        }
      `
  }
`

const AbBotao: React.FC = ({text, onClick, tipo = 'primario'}: AbBotaoProps) => {
  return(
    <BotaoEstilizado onClick={onClick} tipo={tipo}>{text}</BotaoEstilizado>
  );
}

export default AbBotao;
