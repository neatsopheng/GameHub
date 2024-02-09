import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}:Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as='h3' marginBottom={5} marginX={3} fontSize='3xl'>{heading}</Heading>
  )
}

export default GameHeading