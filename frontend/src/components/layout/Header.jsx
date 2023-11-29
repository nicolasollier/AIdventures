import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import SidePanelIcon from "../icons/sidePanelIcon";
import { PlayerContext } from "../../contexts/PlayerContext";
import { logoutUser } from "../../utils/authApi";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(PlayerContext);
  const handleLogout = async () => {
    await logoutUser();
  }

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
        <Text fontSize={"xl"}>AIdventures</Text>
        <Box
          onClick={() => setIsOpen(!isOpen)}
          transition={"all 0.2s"}
          borderRadius={"full"}
          p={4}
          _hover={{
            cursor: "pointer",
            bgColor: "gray.700",
          }}
        >
          <SidePanelIcon />
        </Box>
        <Box
          bgColor={"red.700"}
          onClick={() => handleLogout()}
          transition={"all 0.2s"}
          borderRadius={"full"}
          py={3}
          px={6}
          _hover={{
            cursor: "pointer",
            bgColor: "red.600",
          }}
        >
          <Text>Logout</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
