import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGame';
import PlatformIconList from './PlatformIconList';
interface Props {
    game: Game;
}
const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'} transition={'.4s'} cursor={'pointer'} _hover={{transform: 'scale(1.03)'}}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        </CardBody>
    </Card>
  )
}

export default GameCard;