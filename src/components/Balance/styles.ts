import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.dark};
  border-radius: 22px;
  border-color: ${({theme}) => theme.colors.gray};
  border-width: 3px;
  margin-top: ${RFValue(28)}px;
  z-index: 99;
  height: 20%;
  width: 100%;
  margin-bottom: 5%;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10%;
`;
export const BalanceContent = styled.View`
  flex-direction: column;
`;

export const TitleBalance = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.light};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const BalanceTextCurrent = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.green};
  font-weight: bold;
`;

export const BalanceText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.red};
  font-weight: bold;
`;
