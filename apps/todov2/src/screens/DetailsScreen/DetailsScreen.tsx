import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLayoutEffect } from "react";
import { selectTasksCompleted, selectWorkList, useAppSelector, WorkType } from "@to-do-redux";
import DetailsScreenProps from "./types";
import { Colors } from "../../styles";
import { TagsArray, DifficultyArray } from "../../components/ModalView/ModalView";
import { Pill } from "@to-do-components";
import { DetailsSections } from "../../components";
import { useTranslation } from 'react-i18next';

const DetailsScreen: React.FunctionComponent = ({ route, navigation }: DetailsScreenProps) => {
  const { idItem } = route.params;

  const { t } = useTranslation();

  const taskArray = useAppSelector(selectWorkList);
  const taskCompletedArray = useAppSelector(selectTasksCompleted);

  const allTasks = [...taskArray, ...taskCompletedArray];

  const task = allTasks.find(item => item.id === idItem);
  const tag = TagsArray.find(item => item.name === task.tag);
  const prioLevel = DifficultyArray.find(item => item.name === task.difficulty);

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
      <View style={{margin: 30, gap: 30}}>
        <Text style={{fontSize: 35, fontWeight: "600", color: Colors.TEXT_PRIMARY}}>
          {t("taskDetails")}
        </Text>
        <Text style={[
          {fontSize: 30, fontStyle: "italic", letterSpacing: 1, fontWeight: "500"},
          task.check && {textDecorationLine: "line-through", color: "#B3B1AA"}
        ]}>{task.title}</Text>
        <DetailsSections label={t("taskDescription")}>
          <View style={{padding: 10, backgroundColor: "white", borderRadius: 10, borderWidth: 1}}>
            <Text>{task.desc}</Text>
          </View>
        </DetailsSections>
        <DetailsSections label="Tag">
            <Pill bgColor={tag.color} label={tag.name} pillStyles={{borderColor: "black", alignSelf: "flex-start"}}/>
        </DetailsSections>
        <DetailsSections label={t("priorityLevel")}>
            <Pill bgColor={prioLevel.color} label={prioLevel.name} pillStyles={{borderColor: "black", alignSelf: "flex-start"}}/>
        </DetailsSections>
      </View>
    )
}

export default DetailsScreen;