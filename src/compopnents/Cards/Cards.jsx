import {
  Box,
  Pic,
  PicBar,
  Avatar,
  Tweets,
  Follows,
  Cont,
  ClickActive,
  Click,
  UsersPicture,
} from "./Cards.styled";
import backgroundPicture from "../../assets/img/picture_background.png";
import picture from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFollower,
  deleteFollower,
  selectFollower,
} from "../../my-redux/usersSlice";
import { updateUserThunk } from "../../my-redux/operations";

const Cards = ({ item }) => {
  const dispatch = useDispatch();

  const follower = useSelector(selectFollower);

  const handleAddToFollower = (id) => {
    dispatch(updateUserThunk({ id, users: item.followers + 1 }));
    dispatch(addToFollower(id));
  };

  const handleDeleteFollower = (id) => {
    dispatch(updateUserThunk({ id, users: item.followers - 1 }));
    dispatch(deleteFollower(id));
  };

  return (
    <Box>
      <Pic src={picture} alt="Go It" />
      <img src={backgroundPicture} alt="background" />

      <PicBar></PicBar>

      <div>
        <Avatar></Avatar>
        <UsersPicture src={item.avatar} alt="user" />
      </div>

      <Tweets>
        <span>{item.tweets.toLocaleString()}</span> tweets
      </Tweets>

      <Follows>
        <span>{item.followers.toLocaleString()}</span> Followers
      </Follows>

      <Cont>
        {follower.includes(item.id) ? (
          <ClickActive
            type="button"
            onClick={() => handleDeleteFollower(item.id)}
          >
            Following
          </ClickActive>
        ) : (
          <Click type="button" onClick={() => handleAddToFollower(item.id)}>
            Follow
          </Click>
        )}
      </Cont>
    </Box>
  );
};
export default Cards;
