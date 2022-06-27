import React, {useState} from 'react';
import {IMovements} from '../../model/moviments';
import {ButtonContainer, Content, TextDate, TextLabel, Value} from './styles';
interface IParams {
  data: IMovements;
}

export default function ({data}: IParams) {
  const [showValue, setShowValue] = useState(false);
  return (
    <ButtonContainer onPress={() => setShowValue(!showValue)}>
      <TextDate>{data.movement}</TextDate>
      <Content>
        <TextLabel>{data.categoryMovement}</TextLabel>
        <Value>R$ {data.valueMovement}</Value>
      </Content>
    </ButtonContainer>
  );
}
