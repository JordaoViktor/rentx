import React from "react";
import { StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { Container, Header } from "./styles";

function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo />
      </Header>
    </Container>
  );
}

export default Home;
