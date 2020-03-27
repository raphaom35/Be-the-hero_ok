import React, { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";
import * as MailCompose from "expo-mail-composer";
import logo from "../../assets/logo.png";
import styles from "./styles";
export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Ola ${
    incident.name
  } , estou entradno em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}} `;
  function navigateBack() {
    navigation.goBack();
  }
  function SendMail() {
    MailCompose.composeAsync({
      subject: `Heroi do caso : ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }
  function SendWhatApp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }
  return (
    <View style={styles.conteriner}>
      <View style={styles.hearder}>
        <Image source={logo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia !</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={SendWhatApp}>
            <Text style={styles.ationText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={SendMail}>
            <Text style={styles.ationText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
