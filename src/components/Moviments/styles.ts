import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {IMoviments} from '../../model/moviments';
import {RFValue} from 'react-native-responsive-fontsize';

export const ListMoviments = styled(
  FlatList as new () => FlatList<IMoviments>,
)``;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 24px;
  border-bottom-color: ${({theme}) => theme.colors.green};
  border-bottom-width: 2px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  margin-bottom: 8px;
`;

export const TextDate = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;
export const TextLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;
