import React from 'react';
import {
  Container,
  Title,
  BalanceContainer,
  BalanceContent,
  TextExpenses,
  TextRevenue,
  TextBalance,
} from './styles';

interface IParams {
  Revenue: number;
  Expenses: number;
}

export default function Balance({Revenue, Expenses}: IParams) {
  const balance = Revenue - Expenses;
  return (
    <Container>
      <BalanceContainer>
        <BalanceContent>
          <Title>Saldo</Title>
          <TextBalance>R$ {balance}</TextBalance>
        </BalanceContent>
      </BalanceContainer>
      <BalanceContainer>
        <BalanceContent>
          <Title>Receita</Title>
          <TextRevenue>R$ {Revenue}</TextRevenue>
        </BalanceContent>
        <BalanceContent>
          <Title>Gastos</Title>
          <TextExpenses>R$ {Expenses}</TextExpenses>
        </BalanceContent>
      </BalanceContainer>
    </Container>
  );
}
