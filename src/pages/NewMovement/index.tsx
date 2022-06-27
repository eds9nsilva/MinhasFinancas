import React, {useState} from 'react';
import {Alert, ScrollView} from 'react-native';
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
  TextCategory,
  Currency,
  ContentCurrency,
  ButtonMovement,
  TitleButtonMovement,
} from './styles';
import {useMovementList} from '../../context/moventContext';

const NewMovement: React.FunctionComponent = () => {
  const expenses = [
    {
      id: 1,
      name: 'Cartão',
      icon: 'credit-card',
    },
    {
      id: 2,
      name: 'Aluguel',
      icon: 'home',
    },
    {
      id: 3,
      name: 'Alimentos',
      icon: 'shopping-bag',
    },
    {
      id: 4,
      name: 'Boletos',
      icon: 'file-text',
    },
    {
      id: 5,
      name: 'Outros',
      icon: 'settings',
    },
  ];
  const revenue = [
    {
      id: 1,
      name: 'Salário',
      icon: 'dollar-sign',
    },
    {
      id: 2,
      name: 'Dividendos',
      icon: 'x',
    },
    {
      id: 3,
      name: 'Auxilio',
      icon: 'shopping-cart',
    },
    {
      id: 4,
      name: 'Outros',
      icon: 'settings',
    },
  ];
  const [movement, setMovement] = useState('');
  const [revenuePress, setRevenuePress] = useState('');
  const [valueMovement, setValueMovement] = useState<number>(0);
  const [dollarPress, setDollarPress] = useState(false);
  const [cartPress, setCartPress] = useState(false);

  const {addMovement} = useMovementList();
  const handleSubmit = () => {
    const data = {
      id: String(new Date().getTime()),
      movement,
      categoryMovement: revenuePress,
      valueMovement,
    };
    addMovement(data);
    Alert.alert('Sucesso', 'Movimentação cadastrada com sucesso!');
    setMovement('');
    setRevenuePress('');
    setValueMovement(0);
    setDollarPress(false);
    setCartPress(false);
  };

  return (
    <Container>
      <Title>Adicionar movimentação</Title>
      <CategoryMovementView>
        <CategoryMovement>
          <CategoryMovementButton
            onPress={() => {
              setMovement('Receitas');
              setDollarPress(true);
              setCartPress(false);
            }}
            style={movement === 'Receitas' && {backgroundColor: '#31cdc9'}}>
            <Icon
              name="trending-up"
              size={65}
              color={dollarPress ? '#fff' : '#31cdc9'}
            />
          </CategoryMovementButton>
          <DescriptionMovement>Receitas</DescriptionMovement>
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
              name="trending-down"
              size={65}
              color={cartPress ? '#fff' : '#31cdc9'}
            />
          </CategoryMovementButton>
          <DescriptionMovement>Despesas</DescriptionMovement>
        </CategoryMovement>
      </CategoryMovementView>
      {movement === 'Receitas' && (
        <SubCategoryMovement>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {revenue.map(item => (
              <>
                <SubCategoryMovementButton
                  onPress={() => {
                    setRevenuePress(item.name);
                  }}
                  style={
                    revenuePress === `${item.name}` && {
                      backgroundColor: '#31cdc9',
                    }
                  }>
                  <Icon
                    name={item.icon}
                    size={44}
                    color={revenuePress === `${item.name}` ? '#fff' : '#31cdc9'}
                  />
                  <TextCategory
                    style={
                      revenuePress === `${item.name}`
                        ? {color: '#fff'}
                        : {color: '#31cdc9'}
                    }>
                    {item.name}
                  </TextCategory>
                </SubCategoryMovementButton>
              </>
            ))}
          </ScrollView>
        </SubCategoryMovement>
      )}
      {movement === 'Despesas' && (
        <SubCategoryMovement>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {expenses.map(item => (
              <>
                <SubCategoryMovementButton
                  onPress={() => {
                    setRevenuePress(item.name);
                  }}
                  style={
                    revenuePress === `${item.name}` && {
                      backgroundColor: '#31cdc9',
                    }
                  }>
                  <Icon
                    name={item.icon}
                    size={44}
                    color={revenuePress === `${item.name}` ? '#fff' : '#31cdc9'}
                  />
                  <TextCategory
                    style={
                      revenuePress === `${item.name}`
                        ? {color: '#fff'}
                        : {color: '#31cdc9'}
                    }>
                    {item.name}
                  </TextCategory>
                </SubCategoryMovementButton>
              </>
            ))}
          </ScrollView>
        </SubCategoryMovement>
      )}
      <ContentCurrency>
        <Currency
          value={valueMovement}
          onChangeValue={value => setValueMovement(value as number)}
          prefix="R$"
          placeholder="R$ 00.00"
          delimiter=","
          separator="."
          precision={2}
        />
      </ContentCurrency>
      <ButtonMovement onPress={handleSubmit}>
        <TitleButtonMovement>Salvar</TitleButtonMovement>
      </ButtonMovement>
    </Container>
  );
};

export default NewMovement;
