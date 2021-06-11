import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Container, Header, CarImages } from "./styles";

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
    </Container>
  );
}
