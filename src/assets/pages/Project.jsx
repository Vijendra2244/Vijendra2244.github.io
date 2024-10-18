import React, { useEffect } from "react";
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
import gemini from "../gemini.png";
import Devsync from "../dsevSync.png"
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <>
      <h1 className={styles.headingOfProject}>Project</h1>
      <div className={styles.ProjectContainer} id="project_section">
      <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
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
                backgroundImage: `url(${Devsync})`,
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
                src={Devsync}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                DevSync
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
              DevSync is a code editor built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling. Developed by a two-member team.
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"} color={"gray.600"}>
                  HTML | CSS | JS | React | Node.js | Express.js | MongoDB | Tailwind CSS
                </Text>
              </Stack>
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href="https://devsynceditors.netlify.app/"
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
                  href="https://github.com/Gourav1901/DevSync"
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
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
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
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
              Added features like slider, product browsing, cart handling, and smooth Razorpay payment integration.
              <span style={
                  {visibility:"hidden"}
                }> helps users find the best job opportunities.</span>    
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
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
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
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Developed an online job application platform that facilitates
                job browsing and helps users find the best job opportunities.<span style={
                  {visibility:"hidden"}
                }> helps users find the best job opportunities.</span>    
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
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
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
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Developed a movie and series search website with a focus on
                efficient searching using debouncing.Where user find all movies.<span style={
                  {visibility:"hidden"}
                }> helps users find the best job opportunities.</span>    
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
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
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
              <Text fontSize={"1rem"} textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Created a food website that allows users to search for various
                recipes.And also find the full recipes of specific food and
                make.<span style={
                  {visibility:"hidden"}
                }> helps users find the best job opportunities.</span>    
              </Text>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} width="50%" fontSize={"1rem"}>
                  Tech Stack :
                </Text>
                <Text fontSize={"0.8rem"}  color={"gray.600"}>
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
        <Center data-aos="slide-up" py={12}>
          <Box
            data-aos="zoom-in"
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
                backgroundImage: `url(${gemini})`,
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
                src={gemini}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Gemini_Ai
              </Text>
              <Text fontSize={"1rem"}  textAlign={"left"} fontFamily={"body"} fontWeight={500}>
                Gemini AI for search revolutionizes browsing with cutting-edge
                AI, providing intuitive, personalized search experiences akin to
                GPT's natural language prowess.
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
                  href="https://geminiai0101.netlify.app/"
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
                  href="https://github.com/Vijendra2244/Rivision_Company_Assignment/tree/main/Gemini"
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
