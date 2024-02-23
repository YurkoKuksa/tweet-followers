import { Btn, MainBox } from "./Tweet.styled";

const Tweet = () => {
  return (
    <MainBox>
      <p>
        Just discovered a new shortcut in my coding workflow!
        <span>&#x1F680;</span>
        Now I can save even more time and focus on building awesome projects.
        <span>&#x1F389;</span>
        <br />
        <span>&#x1F4BB;</span>
        #CodingLife #ProductivityBoost
      </p>
      <Btn type="button">close</Btn>
    </MainBox>
  );
};
export default Tweet;
