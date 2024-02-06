import { HStack, Image } from "@chakra-ui/react"
import logo from '../../assets/react.svg';
import ColorModeSwitch from "../colorModeSwitch";
import SearchInput from "../MainPage/SearchInput";

function Navbar() {
  return (
    <HStack  padding={'10px'}>
      <Image src={logo} boxSize={'60px'} backgroundColor={'transparent'}/>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar