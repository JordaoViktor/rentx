import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Assessory } from "../../components/Assessory";
import { Button } from "../../components/Button";
import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Assessories,
  About,
  Footer,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imageUrl={[
            "https://bocamafra.com.br/wp-content/uploads/2021/02/785302.jpg",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>lanborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Assessories>
          <Assessory name="380km/h" icon={speedSvg} />
          <Assessory name="1.25" icon={accelerationSvg} />
          <Assessory name="800 HP" icon={forceSvg} />
          <Assessory name="Gasolina" icon={gasolineSvg} />
          <Assessory name="Auto" icon={exchangeSvg} />
          <Assessory name="2 pessoas" icon={peopleSvg} />
        </Assessories>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Confirmar" color="green" />
      </Footer>
    </Container>
  );
}
