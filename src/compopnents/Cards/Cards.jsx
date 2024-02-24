import {
  Box,
  Pic,
  PicBar,
  Avatar,
  Tweets,
  Follows,
  // Click,
  Cont,
  ClickActive,
} from "./Cards.styled";
import backgroundPicture from "../../assets/img/picture_background.png";
import picture from "../../assets/img/logo.png";
import bar from "../../assets/img/rectangle.png";
import avatar from "../../assets/img/boy.png";

const Cards = ({ item }) => {
  return (
    <Box>
      <Pic src={picture} alt="Go It" />
      <img src={backgroundPicture} alt="background" />
      <PicBar src={bar} alt="bar" />

      <Avatar src={avatar} alt="avatar" />

      <Tweets>
        <span>{item.tweets}</span> tweets
      </Tweets>

      <Follows>
        <span>{item.followers.toLocaleString()}</span> Followers
      </Follows>
      {/* <Cont>
        <Click type="button">Follow</Click>
      </Cont> */}

      {/* <Follows>
  <span>${number.toLocaleString()}</span> Followers
</Follows> */}
      <Cont>
        <ClickActive type="button">{item.followingStatus}</ClickActive>
      </Cont>
    </Box>
  );
};
export default Cards;
