import {
  Flex,
  Box,
  Button,
  Select,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [alignment, setAlignment] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSetPlayerInfos = async () => {
    const playerInfos = {
      hp: 100,
      activeQuest: "N/A",
      equipment: "N/A",
      name: name,
      race: race,
      gender: gender,
      characterClass: characterClass,
      alignment: alignment,
    };

    localStorage.setItem("playerInfos", JSON.stringify(playerInfos));
    navigate("/conversation");
  };

  const races = {
    elfe: "Elfe",
    nain: "Nain",
    humain: "Humain",
    orque: "Orque",
  };

  const classes = {
    guerrier: "Guerrier",
    mage: "Mage",
    voleur: "Voleur",
    prêtre: "Prêtre",
  };

  const alignments = {
    bon: "Bon",
    neutre: "Neutre",
    mauvais: "Mauvais",
  };

  const genders = {
    femme: "Femme",
    homme: "Homme",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      maxW="1280px"
      my={24}
      px={[6, 12]}
      py={[6, 12]}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        width="full"
        height={["full", "520px"]}
        flexGrow={1}
      >
        <Box flex={1} p={6}>
          <FormControl id="name-field" mb={6}>
            <FormLabel>Nom du Personnage</FormLabel>
            <Input
              borderColor={"gray.600"}
              placeholder="Entrez votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="gender-selector" mb={6}>
            <FormLabel>Genre</FormLabel>
            <Select
              borderColor={"gray.600"}
              placeholder="Sélectionnez un genre"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              {Object.entries(genders).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="race-selector" mb={6}>
            <FormLabel>Choix de la Race</FormLabel>
            <Select
              borderColor={"gray.600"}
              placeholder="Sélectionnez une race"
              value={race}
              onChange={(e) => setRace(e.target.value)}
            >
              {Object.entries(races).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="class-selector" mb={6}>
            <FormLabel>Sélection de la Classe</FormLabel>
            <Select
              borderColor={"gray.600"}
              placeholder="Sélectionnez une classe"
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
            >
              {Object.entries(classes).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="alignment-selector" mb={4}>
            <FormLabel>Définition de l'Alignement</FormLabel>
            <Select
              borderColor={"gray.600"}
              placeholder="Sélectionnez un alignement"
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
            >
              {Object.entries(alignments).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Flex>
      <Button
        w="100%"
        fontSize={["xs", "sm"]}
        color="white"
        bg="gray.700"
        py={6}
        mt={12}
        variant="solid"
        _hover={{
          bg: "gray.600",
        }}
        onClick={handleSetPlayerInfos}
      >
        Commencer l'aventure
      </Button>
    </Box>
  );
};

export default Welcome;
