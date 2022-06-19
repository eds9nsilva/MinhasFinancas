import React, {useState} from 'react';
import {
  CategoryMovement,
  CategoryMovementButton,
  CategoryMovementView,
  Container,
  DescriptionMovement,
  Title,
  Icon,
  SubCategoryMovement,
  SubCategoryMovementButton,
  SubCategoryMovementScrollView,
} from './styles';
const NewMovement: React.FunctionComponent = () => {
  const [movement, setMovement] = useState('');
  const [dollarPress, setDollarPress] = useState(false);
  const [cartPress, setCartPress] = useState(false);
  return (
    <Container>
      <Title>Adicionar movimentação</Title>
      <CategoryMovementView>
        <CategoryMovement>
          <CategoryMovementButton
            onPress={() => {
              setMovement('Ganhos');
              setDollarPress(true);
              setCartPress(false);
            }}
            style={movement === 'Ganhos' && {backgroundColor: '#31cdc9'}}>
            <Icon
              name="dollar-sign"
              size={65}
              color={dollarPress ? '#fff' : '#31cdc9'}
            />
          </CategoryMovementButton>
          <DescriptionMovement>Ganhos</DescriptionMovement>
        </CategoryMovement>
        <CategoryMovement>
          <CategoryMovementButton
            onPress={() => {
              setMovement('Despesas');
              setCartPress(true);
              setDollarPress(false);
            }}
            style={movement === 'Despesas' && {backgroundColor: '#31cdc9'}}>
            <Icon
              name="shopping-cart"
              size={65}
              color={cartPress ? '#fff' : '#31cdc9'}
            />
          </CategoryMovementButton>
          <DescriptionMovement>Despesas</DescriptionMovement>
        </CategoryMovement>
      </CategoryMovementView>

      <SubCategoryMovementScrollView
        horizontal
        showsHorizontalScrollIndicator={false}>
        <SubCategoryMovement>
          <SubCategoryMovementButton
            onPress={() => {
              setMovement('Ganhos');
              setDollarPress(true);
              setCartPress(false);
            }}
            style={movement === 'Ganhos' && {backgroundColor: '#31cdc9'}}>
            <Icon
              name="dollar-sign"
              size={65}
              color={dollarPress ? '#fff' : '#31cdc9'}
            />
          </SubCategoryMovementButton>
          <SubCategoryMovementButton
            onPress={() => {
              setMovement('Ganhos');
              setDollarPress(true);
              setCartPress(false);
            }}
            style={movement === 'Ganhos' && {backgroundColor: '#31cdc9'}}>
            <Icon
              name="dollar-sign"
              size={65}
              color={dollarPress ? '#fff' : '#31cdc9'}
            />
          </SubCategoryMovementButton>
          <SubCategoryMovementButton
            onPress={() => {
              setMovement('Ganhos');
              setDollarPress(true);
              setCartPress(false);
            }}
            style={movement === 'Ganhos' && {backgroundColor: '#31cdc9'}}>
            <Icon
              name="dollar-sign"
              size={65}
              color={dollarPress ? '#fff' : '#31cdc9'}
            />
          </SubCategoryMovementButton>
        </SubCategoryMovement>
      </SubCategoryMovementScrollView>
    </Container>
  );
};

export default NewMovement;
