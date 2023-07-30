import { mqTablet } from '@/styles/mq';
import { colors } from '@/styles/variables';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

export type UserLayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  width: 100%;
`;

const NavStyled = styled.nav({
  position: 'fixed',
  width: '100%',
  height: '50px',
  bottom: 0,
  backgroundColor: colors.bgMask,
  zIndex: 100000,
  [mqTablet]: {
    position: 'fixed',
    top: 0,
    height: '50px',
    borderBottom: '1px',
    width: '100%',
    borderColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 3rem',
    backgroundColor: colors.bgContent,
    justifyContent: 'space-between',
  },
});

const NavGroupStyled = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: inherit;
  ${mqTablet} {
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 1rem;
  }
`;

const PageContent = styled.div`
  ${mqTablet} {
    margin-top: 60px;
  }
`;

const Logo = styled.div`
  display: none;
  font-weight: 700;
  ${mqTablet} {
    display: flex;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.5;
  }
`;

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <Container>
      <NavStyled>
        <Logo>AniBrowser</Logo>
        <NavGroupStyled>
          <NavLink href='/'>
            <SearchIcon />
          </NavLink>
          <NavLink href='/collections'>
            <HamburgerIcon />
          </NavLink>
        </NavGroupStyled>
      </NavStyled>
      <PageContent>{children}</PageContent>
    </Container>
  );
};

export default UserLayout;
