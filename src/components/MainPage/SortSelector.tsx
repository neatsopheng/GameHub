import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectedSort: (order: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectedSort, sortOrder}: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release data'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
        <MenuList>
            {sortOrders.map((order) => <MenuItem onClick={() => onSelectedSort(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector