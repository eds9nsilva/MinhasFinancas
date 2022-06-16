import React from 'react';
import {
  Container,
  TitleBalance,
  BalanceContainer,
  BalanceContent,
  BalanceText,
  BalanceTextCurrent,
} from './styles';

interface IParams {
  BalanceCurrent: number;
  Expenses: number;
}

export default function Balance({BalanceCurrent, Expenses}: IParams) {
  return (
    <Container>
      <BalanceContainer>
        <BalanceContent>
          <TitleBalance>Saldo</TitleBalance>
          <BalanceTextCurrent>R$ {BalanceCurrent}</BalanceTextCurrent>
        </BalanceContent>
        <BalanceContent>
          <TitleBalance>Gastos</TitleBalance>
          <BalanceText>R$ {Expenses}</BalanceText>
        </BalanceContent>
      </BalanceContainer>
    </Container>
  );
}
