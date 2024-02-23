// import Cards from "../../compopnents/Cards/Cards";
import { CardList } from "../../compopnents/CardList/CardList";
import { Box } from "./Home.styled";

const Home = () => {
  // const [isLoadMore, setIsLoadMore] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(false);

  // const handleLoadMore = () => {
  //   setPage((prev) => prev + 1);
  // };

  return (
    <Box>
      <h2>Card List</h2>
      <CardList />

      {/* {isLoadMore && !isEmpty && (
        <Button type="button" onClick={handleLoadMore} />
      )} */}
    </Box>
  );
};
export default Home;
