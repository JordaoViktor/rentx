import React from "react";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
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
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
export function Scheduling() {
  const theme = useTheme();
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

      <Content></Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}