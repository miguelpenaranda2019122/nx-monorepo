import { DetailsScreenRouteProp } from "../../App.types";
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "../../App.types";

export default interface DetailsScreenProps {
    route: DetailsScreenRouteProp
    navigation: NavigationProp<RootStackParamList>;
}