import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const YourDetails = () => {
  return (
    <VStack w="full" h={"full"} p={10} spacing={10} align={"flex-start"}>
      <VStack align={"flex-start"} spacing={2}>
        <Heading>Your Details</Heading>
        <Text>Click to login</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter first name" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter Last name" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter Address" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Enter City" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option value="INDIA">INDIA</option>
              <option value="USA">USA</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Canada">Canada</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship to the billing address</Checkbox>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Button variant="primary" width="full" size="lg">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default YourDetails;
