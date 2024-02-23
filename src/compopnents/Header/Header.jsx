import { Box, Link, Navigation, Ul } from "./Header.styled";

import logo from "../../assets/img/main-logo.png";

export const Header = () => {
  return (
    <Box>
      <img src={logo} alt="logo" width={150} />
      <Navigation>
        <Ul>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
          <Link to="/contacts">Contacts</Link>
        </Ul>
      </Navigation>
    </Box>
  );
};
