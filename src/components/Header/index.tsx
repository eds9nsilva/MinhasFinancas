import React from 'react';
import {Container, TitleName, IconImage} from './styles';
import UserImage from '../../assets/Icon/iconUser.png';

interface IParams {
  name: string;
}

export default function Header({name}: IParams) {
  return (
    <Container>
      <TitleName>{name}</TitleName>
      <IconImage source={UserImage} />
    </Container>
  );
}
