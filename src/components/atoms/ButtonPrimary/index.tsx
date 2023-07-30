import { borders, colors } from '@/styles/variables';
import styled from '@emotion/styled';
import React from 'react';

export type ButtonPrimaryProps = React.ComponentProps<'button'>;

const Button = styled.button({
  width: '100%',
  padding: '1rem',
  fontWeight: 700,
  color: 'black',
  backgroundColor: 'white',
  borderRadius: borders.radius,
  [':hover']: {
    backgroundColor: colors.bgHoverWhite,
    cursor: 'pointer',
  },
});

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  ...props
}) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonPrimary;
