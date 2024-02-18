import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";
import adminImage from "../../assets/VijendraChouhanONe.png";

export default function AvatarImg() {
  const size = "196px";
  const color = "#ffb400";

  const pulseRing = keyframes`
	0% {
    transform: scale(0.20);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden"
    >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        zIndex="-888"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: color,
          zIndex:"-888",
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
       
      >
        <Avatar  src={adminImage}  size="full" position="absolute" top={0}  zIndex="-777" />
      </Box>
    </Flex>
  );
}
