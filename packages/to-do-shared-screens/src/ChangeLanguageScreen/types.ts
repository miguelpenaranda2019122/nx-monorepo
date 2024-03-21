import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
  };

export default interface HomeScreenProps {
    navigation: NavigationProp<RootStackParamList>;
}