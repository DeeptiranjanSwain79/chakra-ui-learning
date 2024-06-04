import {
  AspectRatio,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import img from "../assets/skateboard.jpeg";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.600");
  return (
    <VStack
      bg={bgColor}
      w="full"
      h={"full"}
      p={10}
      spacing={10}
      align={"flex-start"}
    >
      <VStack alignItems={"flex-start"} spacing={3}>
        <Heading>Your Cart</Heading>
        <Text>
          If the price is too hard on your eyes{" "}
          <Button
            onClick={toggleColorMode}
            variant={"outline"}
            colorScheme="black"
          >
            Try changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} alignItems={"center"} w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src={img} alt="Skateboard" />
        </AspectRatio>

        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing="0" alignItems="flex-start">
            <Heading size={"md"}>Penny Board</Heading>
            <Text>PNYCOMP2345</Text>
          </VStack>

          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>

      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>

      <Divider />

      <HStack justifyContent="space-between" w="full">
        <Text color={textColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
