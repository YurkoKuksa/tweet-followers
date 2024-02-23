import { Box, Container, List } from "./Footer.styled";

import logo from "../../assets/img/main-logo.png";

export const Footer = () => {
  return (
    <Box>
      <img src={logo} alt="Main Logo" width={150} />

      <Container>
        <h2>Contact Us:</h2>
        <address>
          <ul>
            <List>
              <a href="mailto:example123@email.com">example123@email.com</a>
            </List>
            <List>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </List>
          </ul>
        </address>
      </Container>
    </Box>
  );
};
//  default Footer;
