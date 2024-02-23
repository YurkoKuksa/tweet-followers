import styled from "styled-components";

export const Box = styled.div`
  border-radius: 20px;
  width: 380px;
  height: 460px;
  box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);

  padding: 28px 36px 36px;
  position: relative;
`;

export const Pic = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const PicBar = styled.img`
  width: 380px;
  height: 8px;

  box-shadow: inset 0 3px 3px 0 #fbf8ff, 0 3px 3px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2px 3px 0 #ae7be3;
  background-color: #ebd8ff;
  position: absolute;
  top: 214px;
  left: 0;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  border-radius: 86px;
  width: 80px;
  height: 80px;
`;

export const Tweets = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #ebd8ff;

  margin-top: 88px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Follows = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  color: #ebd8ff;

  text-align: center;
  margin-bottom: 26px;
`;

export const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Click = styled.button`
  border-radius: 10px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
  background-color: #ebd8ff;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;

  margin: 0 auto;

  &:hover {
    background-color: #d3bceb;
  }

  &:active {
    background-color: #c8afe3;
  }
`;

export const ClickActive = styled.button`
  border-radius: 10px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
  background-color: #5cd3a8;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;

  &:hover {
    background-color: #57c29b;
  }

  &:active {
    background-color: #52ba94;
  }
`;
