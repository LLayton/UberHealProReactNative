import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screen/LoginScreen";
import RegisterScreen from "../Screen/RegisterScreen";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LoginScreen}
        name={"LoginScreen"}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        component={RegisterScreen}
        name={"RegisterScreen"}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
