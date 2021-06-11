import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { Container, Header, HeaderContent, TotalCars } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

function Home() {
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
    </Container>
  );
}

export default Home;
