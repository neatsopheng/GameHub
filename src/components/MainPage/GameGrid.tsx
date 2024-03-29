import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../../App";

// this prop is for getting selected genre from app component that passed by genreList component, so it could be genre type or null
interface Props {
  gameQuery: GameQuery;
}

function GameGrid({gameQuery}: Props) {
  const { data, error, isLoading } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return <Text>{error}</Text>

  return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
  );
}

export default GameGrid;
