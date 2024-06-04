import {
  Avatar,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import bigimg from "../assets/big_image.png";

const PostPage = () => {
  return (
    <Container maxW="container.xl">
      <Stack spacing={4} mt={8}>
        <Heading fontSize="2xl" textTransform="capitalize">
          Hello World
        </Heading>
        <Image src={bigimg} />
        <HStack>
          <Avatar src={bigimg} size="lg" />
          <Text fontWeight="600">John Doe</Text>
          <Text fontSize="xs">1 min ago</Text>
        </HStack>
        <Text mt={3} alignContent={"center"} mb={10}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          molestias, ad tempore voluptatem et possimus reprehenderit quod
          quisquam laborum perspiciatis illo, labore voluptates voluptatum cum
          eum recusandae porro iste fuga minus alias? Est quibusdam dolore
          corrupti, suscipit amet consectetur impedit asperiores laudantium
          quasi minus, eveniet illum quae, maxime repellendus porro nemo nulla
          molestiae autem? Amet quisquam veritatis quasi, quod culpa dolorum
          animi, expedita, earum in eveniet inventore accusantium ipsum ducimus
          cupiditate quis! Dolores, dolorum quisquam vitae nobis voluptate
          nulla! Dignissimos nobis nostrum neque fuga maxime porro quisquam
          molestiae quis nesciunt provident quod optio inventore aut delectus
          dolorem laudantium officiis necessitatibus, beatae praesentium!
          Cupiditate odio nemo ea maxime id? Praesentium, obcaecati accusamus?
          Recusandae repudiandae porro cumque blanditiis. Laboriosam minus
          quidem quasi libero iure, est, placeat sit iste repudiandae dolor
          tenetur, eum maxime autem ducimus inventore quam eveniet accusamus
          ullam dignissimos magni numquam et laborum. Praesentium reiciendis
          delectus ipsum, dolores iure nam laudantium illum ipsa, incidunt totam
          molestias debitis recusandae nostrum itaque! Quos in, necessitatibus
          optio doloribus quisquam, ex adipisci atque consequuntur praesentium
          repellendus eligendi. Autem soluta, harum deleniti non libero ex
          obcaecati sunt ipsa cumque nesciunt, sint mollitia totam architecto
          facilis possimus velit porro, impedit asperiores fuga fugiat labore.
          Dolores quod labore molestias commodi magnam. Similique laboriosam qui
          fuga praesentium aperiam quaerat? Asperiores fugit neque nobis. A
          ducimus enim laudantium voluptatem quas laborum deserunt, numquam
          ipsum animi reprehenderit aliquam dolores vitae nemo commodi totam
          culpa magni, fugit soluta ratione rem quam eius dicta quod earum.
          Laboriosam repudiandae sequi exercitationem facere, facilis enim
          distinctio, iure pariatur et quos repellat voluptatibus dolorem autem
          ipsam earum placeat quae possimus aliquam ratione, fugiat fuga
          incidunt perspiciatis nulla. Ullam, facere laboriosam. Perferendis hic
          necessitatibus minima ex, expedita repellat sunt magni explicabo quasi
          libero quibusdam dolorem in possimus. Ea eum, modi fugiat molestias
          itaque eaque, magnam at nam, iure nisi officiis blanditiis voluptates
          assumenda totam quisquam error eius excepturi explicabo qui tempora
          natus ipsum doloribus! Nulla consequatur aliquam quia placeat
          laudantium provident in. Dolor, exercitationem! Odio eveniet sed
          consectetur pariatur tenetur aperiam. Officia asperiores sed nostrum
          numquam molestiae dignissimos? Architecto sapiente porro id quia quae
          illo perspiciatis impedit quisquam autem corrupti, praesentium
          officiis dolores quidem labore deleniti voluptatem dolor atque
          repudiandae aut, eligendi repellendus, soluta at tempora! Quod dolores
          ea sed velit id. Error porro dolorem eveniet velit libero voluptate
          laborum ducimus quia est tempore? Pariatur soluta sunt architecto
          reiciendis, non quibusdam libero ut esse commodi expedita
          necessitatibus provident consequatur laboriosam explicabo optio, eos
          assumenda? Veniam aliquid est explicabo repellat doloremque
          dignissimos reprehenderit maxime labore numquam dolores, atque
          architecto illo, error consequuntur quos aliquam nam quo commodi
          minus. Voluptatibus amet cum quisquam facilis eligendi praesentium
          delectus aperiam. Necessitatibus cupiditate exercitationem nihil
          doloribus ducimus eveniet minus dolore libero, nemo sapiente
          perferendis minima sed sequi molestias dignissimos veniam maxime
          similique. Molestias ab accusamus similique suscipit distinctio
          aspernatur, porro quasi voluptatibus blanditiis quod natus officiis,
          excepturi in quibusdam nesciunt libero eaque! Distinctio tempora
          veritatis ipsa quisquam eius repudiandae, vero officia adipisci
          necessitatibus ipsum repellat omnis dolorem magnam debitis ex illum!
        </Text>
      </Stack>
    </Container>
  );
};

export default PostPage;
