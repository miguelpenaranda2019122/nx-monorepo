import { useLayoutEffect } from "react";
import { Image, TouchableOpacity, SafeAreaView } from 'react-native';
import HomeScreenProps from "./types";


const HomeScreen: React.FunctionComponent = ({navigation}: HomeScreenProps) =>{

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
       <SafeAreaView style={{flex: 1}}>
             
       </SafeAreaView>
    )
}

export default HomeScreen;