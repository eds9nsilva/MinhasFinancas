import React, {useState} from 'react';
import {IMoviments} from '../../model/moviments';
import {ButtonContainer, Content, TextDate, TextLabel, Value} from './styles';

interface IParams {
  data: IMoviments;
}

export default function ({data}: IParams) {
  const [showValue, setShowValue] = useState(false);
  return (
    <ButtonContainer onPress={() => setShowValue(!showValue)}>
      <TextDate>{data.date}</TextDate>
      <Content>
        <TextLabel>{data.label}</TextLabel>
        <Value>{data.value}</Value>
      </Content>
    </ButtonContainer>
  );
}
