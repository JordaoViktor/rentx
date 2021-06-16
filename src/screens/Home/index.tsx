import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const carData = {
    brand: "Audi",
    name: "RS 6 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://bocamafra.com.br/wp-content/uploads/2021/02/785302.jpg",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
