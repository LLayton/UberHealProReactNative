import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider, Box, Button } from "native-base";
import {  registerWithEmailAndPassword } from "./src/firebase";

export default function App() {
  const handleSingup = () => {
    registerWithEmailAndPassword("lyes.souifiiii@gmail.com","1234567891")
  };
  return (
    <NativeBaseProvider>
      <Box alignItems="center" style={{margin:50}}>
        <Button onPress={() => handleSingup()}>Click Me</Button>
      </Box>
    </NativeBaseProvider>
  );
}
