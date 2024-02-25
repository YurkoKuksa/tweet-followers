import { useDispatch } from "react-redux";
import { deleteTweet } from "../../my-redux/operations";
import { Btn, MainBox } from "./Tweet.styled";

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTweet(tweet.id));
  };

  return (
    <>
      <MainBox>
        <p>
          <strong>{tweet.name}:</strong> {tweet.tweet}
          Just discovered a new shortcut in my coding workflow!
          <span>&#x1F680;</span>
          Now I can save even more time and focus on building awesome projects.
          <span>&#x1F389;</span>
          <br />
          <span>&#x1F4BB;</span>
          #CodingLife #ProductivityBoost
        </p>
        <Btn type="button" onClick={handleDelete}>
          delete
        </Btn>
      </MainBox>
    </>
  );
};
export default Tweet;
