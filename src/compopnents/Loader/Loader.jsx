import { SpinnerCircularFixed } from "spinners-react";
import { LoaderBox } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderBox>
      <SpinnerCircularFixed
        size={100}
        thickness={200}
        speed={100}
        color="rgba(108, 57, 172, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </LoaderBox>
  );
};
