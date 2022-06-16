import React from 'react';
import {Container} from './styles';
import Balance from '../../components/Balance';
import Header from '../../components/Header';

const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Header name="Antonio Edson" />
      <Balance BalanceCurrent={100.0} Expenses={200} />
    </Container>
  );
};

export default Home;
