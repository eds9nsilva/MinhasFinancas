import React, {useState} from 'react';
import {Button, Container, Content, Icon} from './styles';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Moviments from '../../components/Moviments';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const list = [
    {
      id: 1,
      label: 'Boleto',
      value: 99,
      date: '18/11/1999',
      type: 0, // Gastos
    },
    {
      id: 2,
      label: 'Pix',
      value: 99,
      date: '18/11/1999',
      type: 1, // Receita
    },
    {
      id: 3,
      label: 'Salário',
      value: 1000,
      date: '18/11/1999',
      type: 1, // Receita
    },
    {
      id: 4,
      label: 'Salário',
      value: 1000,
      date: '18/11/1999',
      type: 1, // Receita
    },
    {
      id: 5,
      label: 'Salário',
      value: 1000,
      date: '18/11/1999',
      type: 1, // Receita
    },
    {
      id: 6,
      label: 'Salário',
      value: 1000,
      date: '18/11/1999',
      type: 1, // Receita
    },
  ];
  return (
    <Container>
      <Content>
        <Header name="Olá, seja bem-vindo(a)" />
        <Balance BalanceCurrent={100.0} Expenses={200} />
        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Moviments data={item} />}
        />
      </Content>
      <Button
        onPress={() => {
          navigation.navigate('NewMovement');
        }}>
        <Icon name="plus" size={24} color="black" />
      </Button>
    </Container>
  );
};

export default Home;
