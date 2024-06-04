import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        placement={"left"}
        onClose={() => setOpenDrawer(false)}
        isOpen={openDrawer}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex
        h="70px"
        bg="brand.800"
        justifyContent="space-between"
        align="center"
        px={4}
      >
        <IconButton
          fontSize="3xl"
          color="white"
          variant="ghost"
          _hover={{ bg: "main.400" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <FaBars />
        </IconButton>

        <Popover>
          <PopoverTrigger>
            <Avatar cursor="pointer" />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Hello User</PopoverHeader>
            <PopoverBody>
              <List>
                <ListItem>Profile</ListItem>
                <ListItem>Settings</ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </>
  );
};

export default Navbar;
