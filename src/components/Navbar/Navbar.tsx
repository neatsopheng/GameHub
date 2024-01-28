import { HStack, Image } from "@chakra-ui/react"
import logo from '../../assets/react.svg';
import ColorModeSwitch from "../colorModeSwitch";

function Navbar() {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} boxSize={'60px'} backgroundColor={'transparent'}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar