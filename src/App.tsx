import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
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
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelect onSelectPlatform={(platform) => {setGameQuery({...gameQuery, platform}); setShowSelected(gameQuery)}} selectedPlatform={gameQuery.platform}/>
            <SortSelector/>
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
