import styled from "styled-components";

export const BoxList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Li = styled.ul`
  width: calc((100% - 40px) / 3);
`;
