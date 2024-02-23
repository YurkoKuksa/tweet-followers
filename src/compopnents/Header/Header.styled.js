import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Box = styled.div`
  padding: 20px;

  border-bottom: 1px solid gray;
  background-color: #e6dcfc;
  color: #2e2f42;

  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);

  display: flex;
`;

export const Navigation = styled.nav`
  margin: 0 auto;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 35px;
  font-weight: bold;
  font-size: 22px;
  color: #48298f;
  align-items: center;

  cursor: pointer;

  padding: 10px;
`;

export const Link = styled(NavLink)`
  &:hover {
    color: #1d084d;
  }

  &.active {
    color: #52ba94;
    &:hover {
      color: #5cd3a8;
    }
  }
`;
