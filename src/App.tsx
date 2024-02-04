import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/MainPage/GameGrid";
import Navbar from "./components/Navbar/Navbar";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
            <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
