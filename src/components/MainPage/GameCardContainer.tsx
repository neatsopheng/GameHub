import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

//working with duplicate styling
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box  borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
