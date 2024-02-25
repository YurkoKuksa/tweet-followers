import styled from "styled-components";

export const BoxTweet = styled.div`
  padding: 45px;
  background-color: #f1edfa;
  flex: 1;
`;

export const FormSubmit = styled.form`
  margin-bottom: 20px;
`;

export const BoxInput = styled.div`
  margin-bottom: 5px;
`;

export const LableTitle = styled.label`
  color: #28475c;
  font-weight: 600;
`;

export const InputStl = styled.input`
  margin: 4px;
`;

export const InputStlTweet = styled.textarea`
  margin: 4px;
  width: 450px;
`;

export const Btn = styled.button`
  display: block;

  padding: 6px 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #83c1eb;
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

export const Title = styled.h1`
  color: #331678;
  margin-bottom: 15px;
`;
