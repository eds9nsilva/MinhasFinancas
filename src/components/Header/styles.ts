import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 14%;
  margin-bottom: -5%;
`;

export const TitleName = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const IconImage = styled.Image`
  height: 40px;
  width: 40px;
`;
