import { borders } from '@/styles/variables';
import styled from '@emotion/styled';
import React from 'react';

export type InputProps = React.ComponentProps<'input'>;

const InputStyled = styled.input({
  borderRadius: borders.radius,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'grey',
  padding: '0 0.5rem',
});
const Input: React.FC<InputProps> = ({ ...props }) => {
  return <InputStyled {...props} />;
};

export default Input;
