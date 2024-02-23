import styled from "styled-components";

export const Box = styled.div`
  background-color: #f1edfa;
  flex: 1;
  padding: 50px;
`;

export const MainHeader = styled.h1`
  margin-bottom: 5px;
  color: #331678;
`;

// Man List styled
export const BoxSmall = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
  justify-content: center;
  align-items: center;
`;
export const ListStyle = styled.li`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-right: 180px;
  margin-bottom: 10px;
`;

// Woman list styled
export const ListStyleWoman = styled.li`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  margin-left: 400px;
  margin-bottom: 10px;
`;

export const BoxSmallWoman = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
  justify-content: center;
  align-items: center;
`;

// address styles
export const AddressHeader = styled.h2`
  margin: 20px 0;
  color: #331678;
`;

export const List = styled.li`
  margin-bottom: 10px;
  text-decoration: underline;

  &:hover {
    font-weight: 700;
  }
`;
