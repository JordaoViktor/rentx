import React from "react";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from "./styles";
import { useTheme } from "styled-components";
import ArrowSvg from "../../assets/arrow.svg";
export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
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
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue
              selected={true}
              style={{ borderBottomWidth: 1, borderBottomColor: "red" }}
            ></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
    </Container>
  );
}
