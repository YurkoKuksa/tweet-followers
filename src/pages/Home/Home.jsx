import React, { useEffect } from "react";
import { CardList } from "../../compopnents/CardList/CardList";
import {
  Box,
  NextBtn,
  PaginationButtons,
  PreviousBtn,
  Text,
  Prev,
  Title,
} from "./Home.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../my-redux/operations";
import { Loader } from "../../compopnents/Loader/Loader";
import { setCurrentPage } from "../../my-redux/usersSlice";

const ITEMS_PER_PAGE = 3;

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.loading);
  const currentPage = useSelector((state) => state.users.currentPage);

  useEffect(() => {
    dispatch(getUsers({ page: currentPage, limit: ITEMS_PER_PAGE }));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    dispatch(getUsers({ page: currentPage + 1, limit: ITEMS_PER_PAGE }));
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(getUsers({ page: currentPage - 1, limit: ITEMS_PER_PAGE }));
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <Box>
      <Title>Card List</Title>
      <CardList users={users} />

      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <PaginationButtons>
            {currentPage !== 1 && (
              <PreviousBtn onClick={handlePrevPage}>
                <Prev>prev </Prev>
              </PreviousBtn>
            )}
            {users.length === ITEMS_PER_PAGE && (
              <NextBtn onClick={handleNextPage}>
                <Text>next</Text>
              </NextBtn>
            )}
          </PaginationButtons>
        </React.Fragment>
      )}
    </Box>
  );
};
export default Home;
