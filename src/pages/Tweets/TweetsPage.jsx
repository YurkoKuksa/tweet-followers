import Tweet from "../../compopnents/Tweet/Tweet";
import { BoxTweet, Title } from "./TweetsPage.styled";

const TweetsPage = () => {
  return (
    <BoxTweet>
      <Title>My Tweets</Title>

      <Tweet />
      <Tweet />

      {/* {<Noitems>There are no items</Noitems>} */}
    </BoxTweet>
  );
};
export default TweetsPage;
