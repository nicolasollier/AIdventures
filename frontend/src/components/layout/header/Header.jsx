import { Box, Text } from "@chakra-ui/react";
import SettingsDropdown from "../../dropdowns/settingsDropdown/SettingsDropdown";

const Header = () => {
  return (
    <Box
      w={"100%"}
      zIndex={10}
      position={"fixed"}
      top={0}
      p={"6"}
      boxShadow="2xl"
      bgColor={"gray.900"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="space-between"
        maxW={"1280px"}
        mx={"auto"}
      >
        <Text fontSize={"xl"}>MageTales</Text>
        <SettingsDropdown />
      </Box>
    </Box>
  );
};

export default Header;
