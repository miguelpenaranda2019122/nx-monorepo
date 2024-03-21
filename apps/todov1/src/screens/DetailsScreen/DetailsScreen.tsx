import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useAppSelector } from "@to-do-redux";
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

    const workList = useAppSelector(state => state.workList.find(work => work.id === idItem));
    
    return (
      <View style={{ gap: 30, marginTop: 30 }}>
      <View style={styles.container}>
          <Text style={styles.title}>{workList?.title}</Text>
          <Text>{workList?.desc}</Text>
      </View>
  </View>
    )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#F1ECE6",
      width: 310,
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      gap: 15
  },
  title: {
      fontSize: 25,
      textAlign: "center",
      fontWeight: "700"
  }
});

export default DetailsScreen;