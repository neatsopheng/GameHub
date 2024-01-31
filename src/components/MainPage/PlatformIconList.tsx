import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {    //this is called index signature that represent everything in this property is a string
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
        
    }
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={'gray.500'}/> // iconMap follow platform.slug to do the render
      ))}
    </HStack>
  );
};

export default PlatformIconList;
