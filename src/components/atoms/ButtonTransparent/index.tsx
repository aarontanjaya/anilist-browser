import { borders } from '@/styles/variables';
import styled from '@emotion/styled';
import React from 'react';

export type ButtonTransparentProps = React.ComponentProps<'button'>;

const Button = styled.button({
  width: 'fit-content',
  fontWeight: 700,
  color: 'black',
  backgroundColor: 'transparent',
  borderRadius: borders.radius,
  [':hover']: {
    opacity: 0.5,
    cursor: 'pointer',
  },
});

const ButtonTransparent: React.FC<ButtonTransparentProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonTransparent;
