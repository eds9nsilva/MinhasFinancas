import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;

export const Content = styled.View`
  margin: 5%;
`;

export const Button = styled.TouchableOpacity`
  bottom: 15%;
  height: 60px;
  width: 60px;
  background-color: ${({theme}) => theme.colors.green};
  border-radius: 35px;
  align-self: center;
  justify-content: center;
  z-index: 99;
`;

export const Icon = styled(Feather)`
  align-self: center;
`;
