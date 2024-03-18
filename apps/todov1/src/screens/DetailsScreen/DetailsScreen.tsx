import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAppSelector } from "../redux/hooks/useSelectorAndDispatch";
import { useLayoutEffect } from "react";
import DetailsScreenProps from "./types";



const DetailsScreen: React.FunctionComponent = ({ route, navigation }: DetailsScreenProps) => {
    const { idItem } = route.params;

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerRight: () => (
              <TouchableOpacity onPress={()=> navigation.navigate('ChangeLanguage')}>
                <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2020/12/Google-translate-icon-design-on-transparent-background-PNG.png' }} style={{ width: 30, height: 30 }}/>
              </TouchableOpacity>
            ),
          });
    }, [navigation]);
    
    return (
        <>
            <Text>Details</Text>
        </>
    )
}

export default DetailsScreen;