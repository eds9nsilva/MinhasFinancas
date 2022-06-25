import React, {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IMovement {
  id: string;
  movement: string;
  categoryMovement: string;
  valueMovement: number;
}

export interface IMovementsContext {
  movement: IMovement[];
  addMovement(movement: IMovement): void;
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
    loadMovements();
  }, []);

  const addMovement = async (movement: IMovement) => {
    try {
      const newMovementList = [...data, movement];
      setData(newMovementList);
      await AsyncStorage.setItem(movementData, JSON.stringify(newMovementList));
    } catch (error) {
      throw new Error(error as string);
    }
  };
  const removeMovement = async (id: string) => {
    const newMovementList = data.filter(task => task.id !== id);
    setData(newMovementList);
    await AsyncStorage.setItem(movementData, JSON.stringify(newMovementList));
  };
  return (
    <MovementContext.Provider
      value={{movement: data, addMovement, removeMovement}}>
      {children}
    </MovementContext.Provider>
  );
};

export function useMovementList(): IMovementsContext {
  const context = useContext(MovementContext);
  if (!context) {
    throw new Error('useMovementList deve ser usado em um MovementProvider');
  }
  return context;
}
