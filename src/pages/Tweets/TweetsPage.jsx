import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  BoxInput,
  BoxTweet,
  Btn,
  FormSubmit,
  InputStl,
  InputStlTweet,
  LableTitle,
  Title,
} from "./TweetsPage.styled";
import { Loader } from "../../compopnents/Loader/Loader";
import { addTweet, addTweets } from "../../my-redux/operations";
import { selectTweets } from "../../my-redux/tweetsSlice";
import Tweet from "../../compopnents/Tweet/Tweet";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);

  useEffect(() => {
    dispatch(addTweets());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTweet = {
      name: e.target.name.value,
      tweet: e.target.tweet.value,
    };

    dispatch(addTweet(newTweet));
    try {
      await dispatch(addTweet(newTweet));
      toast.success("Tweet added successfully!");
      e.target.reset();
    } catch (error) {
      toast.error("Error adding tweet. Please try again later.");
    }
  };
  return (
    <BoxTweet>
      <ToastContainer autoClose={1000} />
      <FormSubmit onSubmit={handleSubmit}>
        <BoxInput>
          <LableTitle>
            Name:
            <InputStl type="text" name="name" required />
          </LableTitle>
        </BoxInput>
        <LableTitle htmlFor="tweet">Tweet:</LableTitle>
        <BoxInput>
          <InputStlTweet id="tweet" name="tweet" rows="4" cols="50" required />
        </BoxInput>
        <Btn type="submit">Add Tweet</Btn>
      </FormSubmit>

      <Title>My Tweets</Title>
      {tweets.length === 0 ? (
        <Loader />
      ) : (
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>
              <Tweet tweet={tweet} />
            </li>
          ))}
        </ul>
      )}
    </BoxTweet>
  );
};

export default Tweets;
