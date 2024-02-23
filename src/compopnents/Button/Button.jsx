import { ButtonSbm } from "./Button.styled";

const Button = ({ onClick }) => {
  return (
    <div>
      <ButtonSbm onClick={onClick}>Load more</ButtonSbm>
    </div>
  );
};

export default Button;
