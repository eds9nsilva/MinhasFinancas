import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.dark};
  border-radius: 22px;
  border-color: ${({theme}) => theme.colors.gray};
  border-width: 3px;
  margin-top: ${RFValue(28)}px;
  z-index: 99;
  height: 130px;
  width: 100%;
  margin-bottom: 5%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BalanceContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;
export const BalanceContent = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.light};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TextRevenue = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

export const TextExpenses = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.red};
  font-weight: bold;
`;

export const TextBalance = styled.Text`
  font-size: ${RFValue(36)}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.green};
  font-weight: bold;
`;
