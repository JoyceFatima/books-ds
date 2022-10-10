import React from 'react';
import styled from 'styled-components';

export interface AbTagProps {
  text?: string
  tipo?: 'primario' | 'secundario'
  onClick?: () => void
}

const AbTagStyled = styled.button<AbTagProps>`
  display: inline-block;
  background: ${(props: AbTagProps) => props.tipo === 'primario' ? '#EB9B00' : '#002F52'};
  color: #FFF;
  font-size: 17px;
  font-weight: 700;
  padding: 1em;
  border: none;
  cursor: pointer;
`
const AbTag: React.FC = ({text, tipo = 'primario', onClick}: AbTagProps) => {
  return(
    <AbTagStyled tipo={tipo} onClick={onClick}>{text}</AbTagStyled>
  )
}

export default AbTag;
