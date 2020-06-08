import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const navigation = useNavigation();

  const [ufs, setUFs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  const placeholderUf = {
    label: "Selecione o Estado (UF)",
    value: null,
  };

  const placeholderCity = {
    label: "Selecione a Cidade",
    value: null,
  };

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then(res => {
        const ufInitials = res.data.map(uf => uf.sigla);
        setUFs(ufInitials);
      });
  }, []);

  useEffect(
    () => {
      if (selectedUf === "0") {
        return;
      }

      axios
        .get<IBGECityResponse[]>(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
        )
        .then(res => {
          const cityNames = res.data.map(city => city.nome);
          setCities(cityNames);
        });
    },
    [selectedUf]
  );

  function handleNavigatePoints() {
    navigation.navigate("Points", { selectedUf, selectedCity });

  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.select}>
            <RNPickerSelect
              placeholder={placeholderUf}
              items={ufs.map(uf => {
                return {
                  label: uf,
                  value: uf,
                  key: uf,
                };
              })}
              onValueChange={value => {
                setSelectedUf(value);
              }}
            />
          </View>
          <View style={styles.select}>
            <RNPickerSelect
              placeholder={placeholderCity}
              items={cities.map(city => {
                return {
                  label: city,
                  value: city,
                  key: city,
                };
              })}
              onValueChange={value => {
                setSelectedCity(value);
              }}
            />
          </View>
          <RectButton style={styles.button} onPress={handleNavigatePoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {
    backgroundColor: "#fff",
    marginBottom: 8,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    paddingRight: 30,
    color: "#6C6C80",
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Home;
