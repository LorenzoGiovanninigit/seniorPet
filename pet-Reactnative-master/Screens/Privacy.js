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
import { color } from "react-native-elements/dist/helpers";

const Privacy = ({ navigation }) => {
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
              navigation.navigate("Info");
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
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Chi siamo</Text>
          <Text style={styles.p}>
            Questo è il sito dell’A.s.t.a. – Associazione per la Salute e la
            <Text></Text>
            Tutela degli Animali. L’indirizzo del nostro sito web è:
            <Text></Text>
            https://www.associazioneasta.com.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titleBig}>
            Quali dati personali raccogliamo e perché li raccogliamo
          </Text>
          <Text style={styles.titles}>Modulo di registrazione utente</Text>
          <Text style={styles.p}>
            i dati sensibili richiesti sono nome e cognome, cellulare, telefono
            indirizzo, età, e indirizzo email. Per poterti ricontattare in caso
            di richiesta di assistenza
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Modulo di registrazione animale</Text>
          <Text style={styles.p}>
            i dati richiesti sono nome razza età e taglia dell’animale da
            compagnia per cui potresti chiedere assistenza. Le informazioni ci
            servono per attivare la richiesta di assistenza
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Cookie</Text>
          <Text style={styles.p}>
            {" "}
            cookies sono dei piccolissimi file di testo che consentono ad un
            sito di memorizzare alcune informazioni di navigazione. In
            particolare esistono cookies “tecnici” e cookies “di profilazione” ;
            cookies del titolare del sito e cookies di terze parti. I cookies
            tecnici vengono usati a supporto della navigazione del sito. Ad
            esempio, se lasci un commento sul nostro sito, puoi scegliere di
            salvare il tuo nome, indirizzo email e sito web nei cookie. Sono
            usati per la tua comodità in modo che tu non debba inserire
            nuovamente i tuoi dati quando lasci un altro commento. Questi cookie
            dureranno per un anno. Se hai un account e accedi a questo sito,
            verrà impostato un cookie temporaneo per determinare se il tuo
            browser accetta i cookie. Questo cookie non contiene dati personali
            e viene eliminato quando chiudi il browser. Al contrario i cookies
            di profilazione sono quelli che registrano alcuni comportamenti del
            visitatore per creare appunto dei profili per scopi pubblicitari.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Analytics</Text>
          <Text style={styles.p}>
            Il nostro sito non utilizza cookies di profilazione ma soltanto
            cookies tecnici di terze parti e nello specifico i soli cookies di
            Google per lo strumento di statistiche delle visite Google
            Analytics, quindi senza finalità pubblicitarie/commerciali. Per
            avere maggiori informazioni su questi cookies clicca qui.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>
            Contenuto incorporato da altri siti web
          </Text>
          <Text style={styles.p}>
            L’informativa è resa solo per il sito https://associazioneasta.com
            di proprietà di Associazione Asta e non anche per altri siti Web
            eventualmente consultati dall’utente tramite link. Gli articoli su
            questo sito possono includere contenuti incorporati (ad esempio
            video, immagini, articoli, ecc.). I contenuti incorporati da altri
            siti web si comportano esattamente allo stesso modo come se il
            visitatore avesse visitato l’altro sito web. Questi siti web possono
            raccogliere dati su di te, usare cookie, integrare ulteriori
            tracciamenti di terze parti e monitorare l’interazione con quel
            contenuto incorporato, incluso il tracciamento della tua interazione
            con il contenuto incorporato se hai un account e hai effettuato
            l’accesso a quel sito web.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Con chi condividiamo i tuoi dati</Text>
          <Text style={styles.p}>
            Non condividiamo i tuoi dati con nessun ente o organizzazione. I
            trattamenti connessi ai servizi Web di questo sito hanno luogo
            presso la sede operativa di ASTA ubicata in Via Sante Bargellini, 18
            00157 Roma e sono curati solo da personale interno incaricato del
            trattamento. I server utilizzati per ospitare e registrare tali dati
            sono forniti da Aruba Spa con sede legale in Via San Clemente, 53 –
            24036 Ponte San Pietro (BG). Nessun dato derivante dal servizio web
            viene comunicato o diffuso.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>
            Per quanto tempo conserviamo i tuoi dati
          </Text>
          <Text style={styles.p}>
            Se compili un form di contatto, ti iscrivi alla newsletter o lasci
            un commento, i tuoi dati, il commento e i relativi metadati vengono
            conservati a tempo indeterminato.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Quali diritti hai sui tuoi dati</Text>
          <Text style={styles.p}>
            Se hai inviato un messaggio, lasciato un commento o ti sei iscritto
            alla mailing list, puoi richiedere di ricevere un file esportato dal
            sito con i dati personali che abbiamo su di te, compresi i dati che
            ci hai fornito. Puoi anche richiedere che cancelliamo tutti i dati
            personali che ti riguardano. Questo non include i dati che siamo
            obbligati a conservare per scopi amministrativi, legali o di
            sicurezza.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Dove spediamo i tuoi dati</Text>
          <Text style={styles.p}>
            I commenti dei visitatori possono essere controllati attraverso un
            servizio di rilevamento automatico dello spam.
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Le nostre informazioni di contatto</Text>
          <Text style={styles.p}>
            Titolare del trattamento dei dati è: Susanna Celsi
          </Text>
        </View>
        <View styles={styles.miniContainer}>
          <Text style={styles.titles}>Riferimenti legali</Text>
          <Text style={styles.p}>
            La presente informativa privacy è redatta sulla base di molteplici
            ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento
            (UE) 2016/679 e art.13 del D.Lgs. n° 196/2003 del Codice in materia
            di protezione dei dati personali.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Privacy;

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
    marginVertical: 2,
    fontSize: 15,
    borderBottomColor: "black",
    borderBottomWidth: 3,
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
