import React from "react";
import styles from "./Project.module.css";
import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import movieWebsite from "../MovieWebsite.png";
import foodWebsite from "../foodWebsite.png";
import shine from "../ProjectOne.png";
import snapdeal from "../snapdeal.png";

function Project() {
  return (
    <>
      <h1 className={styles.headingOfProject}>Project</h1>
      <div className={styles.ProjectContainer} id="project_section">
        <Center zIndex="-111" py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${snapdeal})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={snapdeal}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                snapdeal.com
              </Text>
              <Text fontSize={"1rem"} fontFamily={"body"} fontWeight={500}>
                Implemented features including slider functionality, product
                browsing, cart management, and seamless payment integration
                using Razorpay.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS | React | Node.js | Express.js | MongoDB
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://snapdeal0101.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>

                <Button
                  as="a"
                  href="https://github.com/Vijendra2244/SnapDeal_backend"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center zIndex="-111" py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${shine})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={shine}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                shine.com
              </Text>
              <Text fontSize={"1rem"} fontFamily={"body"} fontWeight={500}>
                Developed an online job application platform that facilitates
                job browsing and helps users find the best job opportunities.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS | React
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://shineclone001100.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>

                <Button
                  as="a"
                  href="https://github.com/Vijendra2244/Shine"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center zIndex="-111" py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${movieWebsite})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={movieWebsite}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Movie.com
              </Text>
              <Text fontSize={"1rem"} fontFamily={"body"} fontWeight={500}>
                Developed a movie and series search website with a focus on
                efficient searching using debouncing.Where user find all movies.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://movieapp123123.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>
                <Button
                  as="a"
                  href="https://github.com/Vijendra2244/DeboubceAndThrottling/tree/main/DebounceMovieApp"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center zIndex="-111" py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"530px"}
            height="490px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${foodWebsite})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={foodWebsite}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Foodie.com
              </Text>
              <Text fontSize={"1rem"} fontFamily={"body"} fontWeight={500}>
                Created a food website that allows users to search for various
                recipes.And also find the full recipes of specific food and
                make.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://foodrecipe01001.netlify.app/"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Live
                </Button>
                // ""
                <Button
                  as="a"
                  href="https://github.com/Vijendra2244/DeboubceAndThrottling/tree/main/ThrottlingFoodRecipe"
                  target="_blank"
                  _hover={{ cursor: "pointer", backgroundColor: "#fcc700" }}
                  backgroundColor="#fbb400"
                  color="black"
                  fontWeight={500}
                  width="50%"
                  fontSize="1rem"
                >
                  Github
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </div>
    </>
  );
}

export default Project;
