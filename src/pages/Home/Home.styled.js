import styled from "styled-components";

export const Box = styled.div`
  padding: 45px 90px;
  background-color: #f1edfa;
  flex: 1;
`;

export const Title = styled.h1`
  color: #331678;
  font-size: 40px;
  text-align: center;
  margin-bottom: 25px;
`;

export const NoItems = styled.p`
  text-align: center;
  margin-top: 50px;
  color: #331678;
  font-size: 25px;
`;

export const PaginationButtons = styled.div`
  padding: 30px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export const PreviousBtn = styled.button`
  position: absolute;
  top: 405px;
  left: 85px;

  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-right: 60px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s border-right;

  &:hover {
    border-right: 60px solid #025dbf;
  }
  &:active {
    transform: scaleX(1.2);
  }
`;

export const NextBtn = styled.button`
  position: absolute;
  top: 405px;
  right: 70px;
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 60px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s border-left;

  &:hover {
    border-left: 60px solid #025dbf;
  }
  &:active {
    transform: scaleX(1.2);
  }
`;

export const Text = styled.p`
  position: absolute;
  top: -10px;
  right: 25px;
  color: #fff;
`;

export const Prev = styled.p`
  position: absolute;
  top: -10px;
  left: 25px;
  color: #fff;
`;
