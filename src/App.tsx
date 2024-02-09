import {  Button, Flex, Grid, GridItem, Menu, MenuButton, MenuList, Show } from "@chakra-ui/react";
import GameGrid from "./components/MainPage/GameGrid";
import Navbar from "./components/Navbar/Navbar";
import GenreList from "./components/Aside/GenreList";
import { useState } from "react";
import { Genre } from "./components/hooks/useGenre";
import { Platform } from "./components/hooks/useGame";
import PlatformSelect from "./components/MainPage/PlatformSelect";
import SortSelector from "./components/MainPage/SortSelector";
import GameHeading from "./components/MainPage/GameHeading";
import GenreDropdown from "./components/Aside/GenreDropdown";
import { BsChevronDown } from "react-icons/bs";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
          
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
          <Show below="lg">
            <Flex justifyContent={'right'} marginX={2}>
              <Menu>
                      <MenuButton as={Button}
               aria-label="Options"
               variant={'outline'}
               rightIcon={<BsChevronDown />}
                      >
              Filter
                      </MenuButton>
                      <MenuList>
                <Flex flexDirection={'column'}>
              
                    <GenreDropdown selectedGenre={gameQuery.genre}
                      onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
                    <PlatformSelect onSelectPlatform={(platform) => {setGameQuery({...gameQuery, platform})}} selectedPlatform={gameQuery.platform}/>
                  <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                </Flex>
                      </MenuList>
                  </Menu>
            </Flex>
          </Show>
          <GameHeading gameQuery={gameQuery}/>

          <Show above="lg">
            <Flex  marginBottom={5} marginLeft={3} flexWrap={'wrap'} gap={5}>
              {/* <Show below="lg">
                <GenreDropdown selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
              </Show> */}
                <PlatformSelect onSelectPlatform={(platform) => {setGameQuery({...gameQuery, platform})}} selectedPlatform={gameQuery.platform}/>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSort={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
            </Flex>
          </Show>
          <GameGrid
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
