import {
  Avatar,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import postimg from "../assets/post.png";
import { Link } from "react-router-dom";

const PostCard = () => {
  return (
    <Flex align="center" justify="center">
      <Stack width="320px" boxShadow="md" borderRadius="xl">
        <Image src={postimg} alt="Post" />
        <Stack p={4}>
          <HStack>
            <Avatar size="sm" />
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 min ago</Text>
          </HStack>

          <VStack align="flex-start">
            <Heading fontSize="lg">Hello World!</Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              inventore officiis nobis enim perferendis. Nihil.
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              inventore officiis nobis enim perferendis. Nihil.
            </Text>

            <Button alignSelf="flex-end" size="sm" as={Link} to={"/post"}>
              View Post
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default PostCard;
