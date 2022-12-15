import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider, Box, Button, Center,FormControl,VStack,HStack,Input,Heading ,Link,Text} from "native-base";
//import { auth, logInWithEmailAndPassword } from "../firebase";

const LoginScreen = ({ navigation }) => {
  return(
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Mot de passe</FormControl.Label>
            <Input type="password" />

          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Se connecter
          </Button>
          <HStack mt="6" justifyContent="center">

            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={()=>{navigation.navigate('RegisterScreen')}}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    )
};

export default LoginScreen;