import styled from "styled-components";

export const MainBox = styled.div`
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);

  background-color: #caaee8;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
`;

export const Btn = styled.button`
  display: block;

  padding: 4px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #3498db;
  color: #fff;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  height: 35px;

  &:hover {
    background-color: #3488db;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;
