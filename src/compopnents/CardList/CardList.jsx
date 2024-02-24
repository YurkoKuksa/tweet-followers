import Cards from "../Cards/Cards";
import { BoxList, Ul, Li, NoItems } from "./CardList.styled";

export const CardList = ({ users }) => {
  return (
    <BoxList>
      {users.length > 0 ? (
        <Ul>
          {users.map((item) => (
            <Li key={item.id}>
              <Cards item={item} />
            </Li>
          ))}
        </Ul>
      ) : (
        <NoItems>There are no items</NoItems>
      )}
    </BoxList>
  );
};
