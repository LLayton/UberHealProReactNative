import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider, Box, Button, Center,FormControl,VStack,HStack,Input,Heading ,Link,Text} from "native-base";
//import {  registerWithEmailAndPassword } from "./src/firebase";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'
export default function App() {
  /*const handleSingup = () => {
    registerWithEmailAndPassword("lyes.souifiiii@gmail.com","1234567891")
  };*/

  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <StackNavigation />
        </NativeBaseProvider>
    </NavigationContainer>
  );
}
