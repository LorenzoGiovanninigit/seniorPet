import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
  opacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import colors from "./config/colors";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { getPets } from "../firebase";

const myAnimals = ({ route, navigation }) => {
  const { uId } = route.params;
  const [pets, setPets] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    getPets(JSON.stringify(uId))
      .then((res) => {
        setPets(res);
        console.log("pets +++", pets);
      })
      .catch((error) => {
        console.log("get pets error +++", error);
      });
  }, [isFocused]);

  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  const Item = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate("animalPage", { pet: JSON.stringify(item) });
      }}
    >
      <View style={styles.imgBg}>
        <Image
          source={{ uri: item.imageUrl } || require("../assets/batman.jpg")}
          style={styles.cardImg}
        />
      </View>
      <Text style={styles.cardText}>{item.petName}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleCardContainer}>
          <View opacity={0.1}>
            <Text>dummy</Text>
          </View>
          <Image
            source={require("../assets/titleLogo.png")}
            style={styles.titleCard}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Info");
            }}
            style={styles.textInfoContainer}
          >
            <Image
              source={require("../assets/info-01.png")}
              style={styles.infoText}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}> i Tuoi Animali </Text>

        {pets && pets.length ? (
          // pets.map((item, i) => {
          //   return (
          //     <TouchableOpacity
          //       key={i}
          //       style={styles.card}
          //       onPress={() => { navigation.navigate("animalPage", { pet: JSON.stringify(item) });}}
          //     >
          //       {/* `${item.imageUrl}` */}
          //       <Image
          //         source={{uri: item.imageUrl} || require("../assets/batman.jpg")}
          //         style={styles.cardImg}
          //       />
          //       <Text style={styles.cardText}>{item.petName}</Text>
          //     </TouchableOpacity>
          //   )
          // })
          <SafeAreaView style={styles.listItemContainer}>
            <FlatList
              data={pets}
              renderItem={renderItem}
              keyExtractor={(item) => item.imageUrl}
            />
          </SafeAreaView>
        ) : (
          <Text style={styles.noDataText}></Text>
        )}

        <TouchableOpacity style={styles.addAnimal}>
          <Text
            style={styles.addAnimalText}
            onPress={() => {
              navigation.navigate("AnimalRegister", { uId: uId });
            }}
          >
            + Aggiungi animale
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default myAnimals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleCardContainer: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    justifyContent: "space-between",

    backgroundColor: colors.primary,
  },
  infoText: {
    marginRight: 5,
    height: 40,
    width: 50,
    resizeMode: "contain",
  },
  textInfoContainer: {
    marginTop: 70,
    marginRight: 5,
  },
  titleCard: {
    marginTop: 30,
    height: 120,
    width: 220,
    resizeMode: "contain",
  },
  listItemContainer: {
    width: "90%",
    paddingTop: 20,
  },
  title: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 50,
  },
  card: {
    backgroundColor: colors.primary,
    width: "100%",
    marginBottom: 30,
    marginTop: 30,

    borderRadius: 10,

    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  cardText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",

    marginLeft: 5,
    marginRight: 10,
  },
  cardImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  imgBg: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 105,
    height: 105,
    borderRadius: 105,
    marginBottom: 40,
  },
  noDataText: {
    color: "black",
    fontSize: 30,
    fontFamily: "Montserrat_700Bold",
    marginTop: 10,
  },
  addAnimal: {
    marginTop: 40,
  },
  addAnimalText: {
    fontFamily: "Montserrat_500Medium",
    color: "#484848",
    fontSize: 25,
  },
});
