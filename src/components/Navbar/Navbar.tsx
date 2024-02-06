import { HStack, Image } from "@chakra-ui/react"
import logo from '../../assets/react.svg';
import ColorModeSwitch from "../colorModeSwitch";
import SearchInput from "../MainPage/SearchInput";

interface Props {
  onSearch: (searchText: string) => void
}

function Navbar({onSearch}: Props) {
  return (
    <HStack  padding={'10px'}>
      <Image src={logo} boxSize={'60px'} backgroundColor={'transparent'}/>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar