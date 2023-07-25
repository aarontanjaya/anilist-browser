import styled from '@emotion/styled';
export type ButtonPaginationProps = React.ComponentProps<'button'> & {
  active?: boolean;
};

const ButtonStyled = styled.button`
  font-size: 1.3rem;
  padding: 0.25rem;
  color: ${(props) => (props.disabled ? 'grey' : 'white')};
  :hover {
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  }
`;

const ButtonPagination: React.FC<ButtonPaginationProps> = ({
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <ButtonStyled disabled={disabled} className={className} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonPagination;
