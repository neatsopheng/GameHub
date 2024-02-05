import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/MainPage/GameGrid";
import Navbar from "./components/Navbar/Navbar";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenre";
import { Platform } from "./components/hooks/useGame";
import PlatformSelect from "./components/MainPage/PlatformSelect";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  console.log(gameQuery);

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
          <PlatformSelect
            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
            selectedPlatform={gameQuery.platform}
          />
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
