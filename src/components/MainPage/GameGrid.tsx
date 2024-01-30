import useGame from "../hooks/useGame";
import { SimpleGrid, Text, transform } from "@chakra-ui/react";
import GameCard from "./GameCard";
function GameGrid() {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5,}} spacing={10} padding={'10px'}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
      
    </>
  );
}

export default GameGrid;
