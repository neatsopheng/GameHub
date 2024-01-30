import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/MainPage/GameGrid";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
       {/* templateAreas: show how our page is gonna be layout */}
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"}>
      <GameGrid/>
      </GridItem>
    </Grid>
    
    </>
    
  );
}

export default App;
