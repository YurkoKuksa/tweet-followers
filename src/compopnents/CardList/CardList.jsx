import Cards from "../Cards/Cards";
import { BoxList, Ul, Li } from "./CardList.styled";

export const CardList = ({ users }) => {
  return (
    <BoxList>
      <Ul>
        {users.map((item) => (
          <Li key={item.id}>
            <Cards item={item} />
          </Li>
        ))}
      </Ul>
    </BoxList>
  );
};
