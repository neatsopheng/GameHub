import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs";
import useGenres, { Genre } from "../hooks/useGenre";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
  }

const GenreDropdown = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, error} = useGenres();
    if (error) return null;
  return (
    <>
    

    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Genre: {selectedGenre?.name || 'Genre'}</MenuButton>
        <MenuList>
            {data.map(genre => <MenuItem onClick={() => onSelectGenre(genre)} key={genre.id}>{genre.name}</MenuItem>)}
        </MenuList>
    </Menu>
    </>
  )
}

export default GenreDropdown