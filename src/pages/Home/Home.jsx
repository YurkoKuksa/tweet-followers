import { useEffect } from "react";
import { CardList } from "../../compopnents/CardList/CardList";
import { Box, Title } from "./Home.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../my-redux/operations";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // const [isLoadMore, setIsLoadMore] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(false);

  // const handleLoadMore = () => {
  //   setPage((prev) => prev + 1);
  // };

  // const [users, setUsers] = useState([]);
  return (
    <Box>
      <Title>Card List</Title>
      <CardList users={users} />

      {/* {isLoadMore && !isEmpty && (
        <Button type="button" onClick={handleLoadMore} />
      )} */}

      {/* {<Noitems>There are no items</Noitems>} */}
    </Box>
  );
};
export default Home;
