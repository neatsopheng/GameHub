import meh from '../../assets/meh.png';
import bullEye from '../../assets/bull_eyes.jpg';
import thumbUp from '../../assets/thumb_up.jpg';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
    rating: number;
}

const Emoji = ({rating}: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: meh, alt: 'meh'},
        4: {src: bullEye, alt: 'recommended'},
        5: {src: thumbUp, alt: 'exceptional'},
    }
  return (
    <Image {...emojiMap[rating]} boxSize={'25px'} marginTop={1} objectFit={'cover'}/>
  )
}

export default Emoji