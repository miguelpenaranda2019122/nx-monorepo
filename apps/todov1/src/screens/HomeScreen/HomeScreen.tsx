import { useLayoutEffect } from "react";
import { Image, TouchableOpacity, SafeAreaView, Alert, Text } from 'react-native';
import HomeScreenProps from "./types";
import { Input } from '@to-do-components';
import TasksSection from "../../components/TasksSection";
import ModalView from "../../components/ModalView";
import { useAppSelector, useAppDispatch, selectText, setText, selectModalVisible, setModalVisible} from '@to-do-redux';
import { useTranslation } from 'react-i18next';
import Config from "react-native-config";

const { NUMBER, NAME } = Config;


const HomeScreen: React.FunctionComponent = ({navigation}: HomeScreenProps) =>{

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const text = useAppSelector(selectText);
  const modalVisible = useAppSelector(selectModalVisible);

  const openModal = ()=> {
    if (!text.trim()) {
        Alert.alert(
         `${t("inputAlertTitleText")}`,
         `${t("inputAlertDescText")}`,
         [
             {text: "OK"}
         ]
        );
        return;
     }
    dispatch(setModalVisible(!modalVisible))
}

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
      <SafeAreaView style={{flex: 1, gap: 30}}>
          <Text>{NAME}</Text>
          <Text>{NUMBER}</Text>
            <Input defaultValue={text} 
                  onChangeText={(text: string) => dispatch(setText(text))}
                  placeholder={t("inputText")}
                  buttonOnInput
                  onPress={() => openModal()}
                  inputStyles={{marginTop: 30}}
            />
            <TasksSection navTo={id => navigation.navigate("Details", { idItem: id })}/>
            <ModalView />
      </SafeAreaView>
  )
}

export default HomeScreen;