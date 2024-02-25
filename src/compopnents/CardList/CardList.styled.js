import styled from "styled-components";

export const BoxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 0 30px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  row-gap: 20px;
`;

export const Li = styled.li`
  width: calc((100% - 40px) / 3);
`;

export const NoItems = styled.p`
  text-align: center;
  margin-top: 180px;
  color: red;
  font-size: 50px;
`;
