import React, { useEffect, useRef } from "react";
import { CardList } from "../../compopnents/CardList/CardList";
import { Box, Title } from "./Home.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../my-redux/operations";

import {
  selectCurrentPage,
  selectIsFinish,
  selectLoading,
  selectUsers,
} from "../../my-redux/usersSlice";
import Button from "../../compopnents/Button/Button";
import { Loader } from "../../compopnents/Loader/Loader";

const ITEMS_PER_PAGE = 3;

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const currentPage = useSelector(selectCurrentPage);
  const isFinish = useSelector(selectIsFinish);
  const boxRef = useRef(null);

  useEffect(() => {
    dispatch(getUsers({ page: currentPage, limit: ITEMS_PER_PAGE }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (users.length > ITEMS_PER_PAGE) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [users]);

  const loadMoreUsers = () => {
    const lastPage = users.length / ITEMS_PER_PAGE;
    dispatch(getUsers({ page: lastPage + 1, limit: ITEMS_PER_PAGE }));
  };

  return (
    <Box>
      <Title>Card List</Title>

      {isLoading ? (
        <Loader />
      ) : (
        <CardList users={users} isLoading={isLoading} />
      )}

      <hr />

      {!isFinish && !isLoading && (
        <Button type="button" onClick={loadMoreUsers} />
      )}

      <div ref={boxRef}></div>
    </Box>
  );
};
export default Home;
