import React from 'react';
import {Button, Container, Content, Icon} from './styles';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Moviments from '../../components/Moviments';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useMovementList} from '../../context/moventContext';
import {IMovements} from '../../model/moviments';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

const Home: React.FunctionComponent = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const {movement} = useMovementList();
  const Revenue = movement.filter(item => item.movement === 'Receitas');
  const expenses = movement.filter(item => item.movement === 'Despesas');

  function handleSumValueMovement(movement: IMovements[]) {
    let sum = 0;
    for (let i = 0; i <= movement.length; i++) {
      if (movement[i]) {
        sum += movement[i].valueMovement;
      }
    }
    return sum;
  }

  return (
    <Container>
      <Content>
        <Header name="Olá, seja bem-vindo(a)" />
        <Balance
          Revenue={handleSumValueMovement(Revenue)}
          Expenses={handleSumValueMovement(expenses)}
        />
        <FlatList
          data={movement}
          keyExtractor={item => item.id}
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
