import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps {
  selected: boolean;
}
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 25px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DateInfo = styled.View`
  width: 30%;
`;
export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  /* position: absolute; */
  ${({ theme, selected }) =>
    !selected &&
    css`
      border-style: solid;
      border-bottom-width: 20px;
      border-bottom-color: red;
      /* background-color: red; */
      /* border-bottom-color: ${theme.colors.text}; */
      /* position: absolute; */
      /* border-left-width: 20px; */
      /* border-left-color: red; */
      /* border-color: #fff; */
      /* border: solid 1px ${theme.colors.text}; */
      /* border-top-width: 0; */
    `};
`;
