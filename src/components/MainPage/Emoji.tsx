import meh from '../../assets/meh-removebg-preview.png';
import bullEye from '../../assets/bull_eyes-removebg-preview.png';
import thumbUp from '../../assets/thumb_up-removebg-preview.png';
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