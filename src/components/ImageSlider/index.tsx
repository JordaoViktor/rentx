import React from "react";
import { FlatList } from "react-native";
import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imageUrl: string[];
}

export function ImageSlider({ imageUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        {imageUrl.map((_, index) => (
          <ImageIndex key={String(index)} active={true} />
        ))}
      </ImageIndexes>
      <FlatList
        data={imageUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
