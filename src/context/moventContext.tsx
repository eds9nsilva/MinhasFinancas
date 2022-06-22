import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, FunctionComponent, useEffect, useState} from 'react';

export interface IMovement {
  id: string;
  movement: string;
  categoryMovement: string;
  valueMovement: number;
}

export interface IMovementsContext {
  addMovement(movement: IMovement): void;
  movements: IMovement[];
  removeMovement(id: string): void;
}

const movementData = '@MinhasFinancas:Movements';

interface IProps {
  children: React.ReactElement;
}

export const MovementContext = createContext<IMovementsContext>(
  {} as IMovementsContext,
);

export const MovementProvider: FunctionComponent<IProps> = ({children}) => {
  const [data, setData] = useState<IMovement[]>([]);
  useEffect(() => {
    async function loadMovements() {
      const movementList = await AsyncStorage.getItem(movementData);
      if (movementList) {
        setData(JSON.parse(movementList));
      }
    }
  });
};
