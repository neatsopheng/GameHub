import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

//for sharing state with gameGrid component
interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  // const {data} = useData<Genre>('/genres'); //bad practice: neeed to avoid component about knowing the endpoint
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />

  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={8}/>
            <Button onClick={() => onSelectGenre(genre)} variant={'link'} fontSize={'lg '}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
