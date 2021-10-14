import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";

import React from "react";

import Welcome from "./Screens/Welcome";

import Register from "./Screens/Register";
import LoginCard from "./Screens/LoginCard";
import AnimalRegister from "./Screens/AnimalRegister";
import myAnimals from "./Screens/myAnimals";
import animalPage from "./Screens/animalPage";
import helpRequest from "./Screens/helpRequest";
import Info from "./Screens/Info";
import error from "./Screens/error";
import Privacy from "./Screens/Privacy";
import Credits from "./Screens/Credits";
import InfoNoLogs from "./Screens/InfoNoLog";
import CreditsNoLogs from "./Screens/CreditsNoLogs";
import PrivacyNoLogs from "./Screens/PrivacyNoLogs";
import RegolamentoNoLog from "./Screens/RegolamentoNoLog";
import Regolamento from "./Screens/Regolamento";

import { apply } from "async";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginCard" component={LoginCard} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AnimalRegister"
          component={AnimalRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoNoLogs"
          component={InfoNoLogs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreditsNoLogs"
          component={CreditsNoLogs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PrivacyNoLogs"
          component={PrivacyNoLogs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegolamentoNoLog"
          component={RegolamentoNoLog}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Credits"
          component={Credits}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Regolamento"
          component={Regolamento}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="myAnimals"
          component={myAnimals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="animalPage"
          component={animalPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="helpRequest"
          component={helpRequest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="error"
          component={error}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
