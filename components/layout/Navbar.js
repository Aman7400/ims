import { Avatar, Button, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IoIosNotificationsOutline } from "react-icons/io"
import Link from "next/link";

export default function Navbar() {
    const { isLoggedIn, handleLogout, handleLogin } = React.useContext(AuthContext)
    return (
        <HStack justifyContent={"space-between"} py={4} px={8}>
            <Heading>
                <Link href="/">
                    IMS
                </Link>
            </Heading>

            <HStack spacing={2}>

                {
                    isLoggedIn
                        ?
                        <HStack spacing={1}>
                            <Notifications />
                            <UserMenu onLogOut={handleLogout} />
                        </HStack>
                        :
                        <Button onClick={handleLogin} colorScheme={"teal"}>
                            Login
                        </Button>
                }

            </HStack>

        </HStack>
    )
}

function Notifications({ }) {
    return (
        <Popover>
            <PopoverTrigger>
                <IconButton variant={"ghost"} colorScheme={"teal"} borderRadius={100} icon={<IoIosNotificationsOutline size={24} />} />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>All Notifications</PopoverHeader>
                <PopoverBody>Welcome Aboard !!</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

function UserMenu({ onLogOut }) {
    return (
        <Menu>
            <MenuButton as={Avatar} cursor={"pointer"} size="sm" src="" />
            <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={onLogOut}>Log Out</MenuItem>
            </MenuList>
        </Menu>
    )
}