import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.green};
  align-self: center;
  margin-top: 5%;
`;

export const CategoryMovementView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5%;
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

export const SubCategoryMovementScrollView = styled.ScrollView``;

export const SubCategoryMovementButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.dark};
  height: 100px;
  width: 100px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export const SubCategoryMovement = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
