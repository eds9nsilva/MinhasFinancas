import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import CurrencyInput from 'react-native-currency-input';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.green};
  align-self: center;
  margin-top: 5%;
`;

export const CategoryMovementView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5%;
  z-index: 99;
`;

export const CategoryMovementButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.dark};
  height: 100px;
  width: 100px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

export const CategoryMovement = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const DescriptionMovement = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.green};
  margin-top: 2%;
`;

export const Icon = styled(Feather)`
  align-self: center;
`;

export const SubCategoryMovement = styled.View`
  flex-direction: column;
  margin-top: 5%;
`;

export const SubCategoryMovementButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.dark};
  height: 100px;
  width: 100px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const TextCategory = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.green};
`;

export const ContentCurrency = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;
  z-index: 99;
`;
export const Currency = styled(CurrencyInput)`
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.green};
  justify-content: center;
  padding-left: 22px;
  border-color: ${({theme}) => theme.colors.green};
  border-bottom-width: 1px;
`;

export const TitleButtonMovement = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.green};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ButtonMovement = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.dark};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 250px;
  height: 65px;
  border-radius: 8px;
  margin-top: 8%;
`;
