import React, { useState } from "react";
import {  logInWithEmailAndPassword } from "../firebase";
import {
  Box,
  Button,
  Center,
  FormControl,
  VStack,
  HStack,
  Input,
  Heading,
  Link,
  AlertDialog,
} from "native-base";
//import { auth, logInWithEmailAndPassword } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Uberheal
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Connectez vous !
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Adresse mail</FormControl.Label>
            <Input
              value={mail}
              onChangeText={(value) => {
                SetMail(value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input
              value={password}
              onChangeText={(value) => {
                SetPassword(value);
              }}
              type="password"
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => {
            logInWithEmailAndPassword(mail,password).then(()=>{
              setIsOpen(!isOpen)
            })
            }}>
            Se connecter
          </Button>
          <HStack mt="6">
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              S'inscrire
            </Link>
          </HStack>
        </VStack>
      </Box>

      <Center>
  
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Connexion effectué</AlertDialog.Header>
            <AlertDialog.Body>
              Connexion effectué

            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}
                >
                  Cancel
                </Button>
                <Button colorScheme="danger" onPress={onClose}>
                  Delete
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </Center>
  );
};

export default LoginScreen;
