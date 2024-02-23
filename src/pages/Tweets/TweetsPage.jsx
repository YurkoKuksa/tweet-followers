import Tweet from "../../compopnents/Tweet/Tweet";
import { BoxTweet, Title } from "./TweetsPage.styled";

const TweetsPage = () => {
  return (
    <BoxTweet>
      <Title>My Tweets</Title>

      <Tweet />
      <Tweet />
    </BoxTweet>
  );
};
export default TweetsPage;
