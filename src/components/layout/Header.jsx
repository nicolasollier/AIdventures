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
      bgBlendMode={"luminosity"}
    >
      <Text fontSize={"xl"}>AIdventures</Text>
    </Box>
  );
};

export default Header;
