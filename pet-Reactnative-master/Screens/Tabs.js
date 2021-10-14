import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Landing from "./Landing";
import addPet from "./SubTabs/addPet";
import reminder from "./SubTabs/reminder";
import support from "./SubTabs/support";
import Home from "./SubTabs/Home";
import bigB from "./SubTabs/bigB";
import colors from "./config/colors";

const Tab = createBottomTabNavigator();
const CustomTabButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...style.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.white,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.primary,
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Text style={{ color: focused ? colors.black : colors.white }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyPets"
        component={addPet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Text style={{ color: focused ? colors.black : colors.white }}>
                ADDPET
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="bigB"
        component={bigB}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/plus.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Reminders"
        component={reminder}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Text style={{ color: focused ? colors.black : colors.white }}>
                AGENDA
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={support}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Text style={{ color: focused ? colors.black : colors.white }}>
                CHAT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
