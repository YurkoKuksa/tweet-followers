import styled from "styled-components";

export const ButtonSbm = styled.button`
  display: block;
  margin: 30px auto;
  padding: 10px 20px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #b58de0;
  color: #fff;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #a97bdb;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
    background-color: #9d6ad4;
  }
`;
