import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  color: #072bf8;

  &:hover,
  &:focus {
    color: red;
  }

  transition: color 0.25s;
`;
