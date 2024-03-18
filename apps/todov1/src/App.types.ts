import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: { idItem: number };
  ChangeLanguage: undefined
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>