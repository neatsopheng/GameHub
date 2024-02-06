import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/MainPage/GameGrid";
import Navbar from "./components/Navbar/Navbar";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenre";
import { Platform } from "./components/hooks/useGame";
import PlatformSelect from "./components/MainPage/PlatformSelect";
import SortSelector from "./components/MainPage/SortSelector";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [showSelected, setShowSelected] = useState<GameQuery>({} as GameQuery);
  
  console.log(showSelected.genre?.name);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{
          // this also effective in displaying skeleton as it fixed width
          base: "1fr",
          lg: "200px 1fr",
        }}
        >
        {/* templateAreas: show how our page is gonna be layout */}
        <GridItem area="nav">
          <Navbar />
        <p>{showSelected.genre?.name}</p>
          
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} width={"240px"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Flex  paddingLeft={2} marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelect onSelectPlatform={(platform) => {setGameQuery({...gameQuery, platform}); setShowSelected(gameQuery)}} selectedPlatform={gameQuery.platform}/>
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
