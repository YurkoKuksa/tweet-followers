import {
  AddressHeader,
  Box,
  BoxSmall,
  BoxSmallWoman,
  List,
  ListStyle,
  ListStyleWoman,
  MainHeader,
} from "./Contacts.styled";

import man from "../../assets/img/pic-man.jpg";
import woman from "../../assets/img/pic-woman.jpg";

const Contacts = () => {
  return (
    <Box>
      <MainHeader>Contact Us:</MainHeader>
      <ul>
        <ListStyle>
          <BoxSmall>
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              odit illo vero recusandae quidem eos tempore. Earum veniam,
              ratione minus harum molestias fuga unde numquam quas dolorem
              voluptatem laboriosam. Voluptate!
            </p>
          </BoxSmall>
          <img src={man} alt="contact person" width={250} height={250} />
        </ListStyle>
        <ListStyleWoman>
          <img src={woman} alt="contact person" width={250} height={250} />
          <BoxSmallWoman>
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              odit illo vero recusandae quidem eos tempore. Earum veniam,
              ratione minus harum molestias fuga unde numquam quas dolorem
              voluptatem laboriosam. Voluptate!
            </p>
          </BoxSmallWoman>
        </ListStyleWoman>
        <ListStyle>
          <BoxSmall>
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              odit illo vero recusandae quidem eos tempore. Earum veniam,
              ratione minus harum molestias fuga unde numquam quas dolorem
              voluptatem laboriosam. Voluptate!
            </p>
          </BoxSmall>
          <img src={man} alt="contact person" width={250} height={250} />
        </ListStyle>
      </ul>

      <AddressHeader>Our Address:</AddressHeader>
      <address>
        <ul>
          <List>
            <a href="mailto:example123@email.com">example123@email.com</a>
          </List>
          <List>
            <a href="tel:+15551234567">+1 (555) 123-4567</a>
          </List>
          <List>
            <a
              href="https://maps.app.goo.gl/R7DXisaviofmVvJx8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manhattan Brg, New York, NY 11201, United States
            </a>
          </List>
        </ul>
      </address>
    </Box>
  );
};
export default Contacts;
