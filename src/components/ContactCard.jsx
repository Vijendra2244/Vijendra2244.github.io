import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson, BsPhone } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactCard() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  const { hasCopied: hasCopiedEmail, onCopy: onCopyEmail } =
    useClipboard("vs230267@gmail.com");
  const { hasCopied: hasCopiedNum, onCopy: onCopyNum } =
    useClipboard("9009060724");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_v88ocap", "template_xke35vg", e.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundAttachment: "fixed",
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              color={"#fbb400"}
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              _hover={{
                textShadow: "2px 2px 8px white",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopiedEmail ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    onClick={onCopyEmail}
                    isRound
                  />
                </Tooltip>

                <Box as="a" href="https://github.com/Vijendra2244" target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    isRound
                  />
                </Box>

                <Tooltip
                  label={hasCopiedNum ? "Number Copied!" : "Copy Number"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="number"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsPhone />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    onClick={onCopyNum}
                    isRound
                  />
                </Tooltip>

                <Box
                  as="a"
                  href="https://www.linkedin.com/in/vijendra-chouhan-989687292/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: " #ffb400;",
                    }}
                    isRound
                  />
                </Box>
              </Stack>

              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                onSubmit={handleSubmit}
              >
            
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        name="name"
                        placeholder="Your Name"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      onChange={handleChange}
                      value={formData.message}
                    />
                  </FormControl>

                  <Button
                    colorScheme="yellow"
                    bg=" #ffb400;"
                    color="white"
                    _hover={{
                      bg: " #fcc700;",
                    }}
                    width="full"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
