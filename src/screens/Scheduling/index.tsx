import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  BorderView,
  Content,
  Footer,
} from "./styles";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import ArrowSvg from "../../assets/arrow.svg";
import { useNavigation } from "@react-navigation/native";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();
  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma{"\n"}
          data de início e{"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <BorderView selected={false}>
              <DateValue>18/06/2021</DateValue>
            </BorderView>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <BorderView selected={false}>
              <DateValue></DateValue>
            </BorderView>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
