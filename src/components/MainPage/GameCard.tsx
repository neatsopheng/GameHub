import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGame';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';
interface Props {
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card  transition={'.4s'} cursor={'pointer'} _hover={{transform: 'scale(1.03)'}}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justify={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
            <Emoji rating={game.rating_top}/>
        </CardBody>
    </Card>
  )
}

export default GameCard;