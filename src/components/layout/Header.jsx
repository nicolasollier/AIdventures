import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      w={"100%"}
      zIndex={10}
      position={"sticky"}
      top={0}
      p={"6"}
      boxShadow="2xl"
      bgColor={"gray.900"}
    >
      <Box maxW={"1280px"} mx={"auto"}>
        <Text fontSize={"xl"}>AIdventures</Text>
      </Box>
    </Box>
  );
};

export default Header;
