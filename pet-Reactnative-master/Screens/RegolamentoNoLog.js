import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import colors from "./config/colors";
import { AntDesign } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const RegolamentoNoLog = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleCardContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.navigate("InfoNoLogs");
            }}
          >
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Image
            source={require("../assets/titleLogo.png")}
            style={styles.titleCard}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("InfoNoLogs");
            }}
            style={styles.textInfoContainer}
          >
            <Image
              source={require("../assets/info-01.png")}
              style={styles.infoText}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.miniTitle}>
          {" "}
          Regolamento all’uso di Senior Pets
        </Text>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>1 oggetto del servizio</Text>
          <Text style={styles.p}>
            Senior Pets è un servizio di assistenza on line per anziani con
            difficoltà di spostamento {"\n"}e a basso reddito che li aiuti a
            gestire l’animale da compagnia.
          </Text>
          <Text style={styles.p}>
            Il servizio viene erogato tramite una App installata sullo
            smartphone dell’anziano che permette la registrazione dell’utente e
            dei suoi animali.
          </Text>
          <Text style={styles.p}>
            Con un semplice click è possibile comunicare a Senior Pets la
            necessità di un consulto veterinario.
          </Text>
          <Text style={styles.p}>
            Un animale in casa diventa un compagno fedele di molti anziani che
            vivono soli. Vivere con un pet ha un impatto positivo su salute e
            umore, riduce la solitudine e aumenta la serenità, favorisce la
            socializzazione ed è oltretutto uno stimolo a muoversi. 7 anziani su
            10 pensano che la propria vita potrebbe migliorare grazie alla loro
            compagnia.
          </Text>
          <Text style={styles.titles}>2 Accesso ed utilizzo del servizio</Text>
          <Text style={styles.p}>
            Per usufruire del servizio gratuitamente è necessario:
          </Text>
          <Text style={styles.p}>Avere oltre 65 anni</Text>
          <Text style={styles.p}>Possedere un animale da compagnia</Text>
          <Text style={styles.p}>
            Essere in possesso di uno smartphone con connessione internet (sim
            internet o wifi casalingo)
          </Text>
          <Text style={styles.p}>Avere un Isee basso ( minore di 15'000)</Text>
          <Text style={styles.p}>
            A.S.T.A odv si riserva il diritto di verificare a proprietà
            dell’animale e le condizioni reddituali del richiedente
          </Text>
          <Text style={styles.titles}>
            3 Responsabilità del fornitore del servizio
          </Text>
          <Text style={styles.p}>
            Il fornitore del servizio compirà ogni ragionevole sforzo per
            garantire il buon funzionamento dello stesso in maniera
            ininterrotta.
          </Text>
          <Text style={styles.p}>
            L’utente, tuttavia, prende atto ed accetta che qualora tale servizio
            dovesse risultare inutilizzabile per effetto del verificarsi di
            eventuali problemi tecnici, nessuna responsabilità graverà su ASTA
            odv.
          </Text>
          <Text style={styles.titles}>4 Budget del progetto</Text>
          <Text style={styles.p}>
            Il servizio sarà disponibile fino ad esaurimento dei fondi erogati
            da Fondazione Tim
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default RegolamentoNoLog;
const styles = StyleSheet.create({
  container: {},
  miniContainer: {
    flex: 1,

    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleBig: {
    marginLeft: 30,
    flexShrink: 1,
    width: "80%",
    fontFamily: "Montserrat_700Bold",
    color: colors.primary,
    marginVertical: 2,
    fontSize: 23,
    textAlign: "center",
    textAlignVertical: "center",
  },
  miniTitle: {
    marginLeft: 30,
    flexShrink: 1,
    width: "80%",
    fontFamily: "Montserrat_700Bold",
    color: colors.primary,
    marginVertical: 10,
    fontSize: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  titles: {
    marginLeft: 30,
    flexShrink: 1,
    width: "80%",
    fontFamily: "Montserrat_700Bold",
    color: colors.primary,
    marginVertical: 2,
    fontSize: 23,
    textAlign: "center",
    textAlignVertical: "center",
  },
  p: {
    marginLeft: 30,
    flexShrink: 1,
    width: "80%",
    fontFamily: "Montserrat_500Medium",
    color: "black",
    marginVertical: 10,
    fontSize: 15,
    // borderBottomColor: "black",
    // borderBottomWidth: 3,
    textAlign: "center",
    textAlignVertical: "center",
  },
  titleCardContainer: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    justifyContent: "space-between",

    backgroundColor: colors.primary,
  },
  backButton: {
    marginTop: 80,
    marginLeft: 10,
  },
  titleCard: {
    height: 120,
    width: 220,
    resizeMode: "contain",
    marginLeft: 30,
    marginTop: 30,
  },
  titleCardContainer: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    justifyContent: "space-between",

    backgroundColor: colors.primary,
  },
  backButton: {
    marginTop: 80,
    marginLeft: 10,
  },
  titleCard: {
    height: 120,
    width: 220,
    resizeMode: "contain",
    marginLeft: 20,
    marginTop: 30,
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
});
