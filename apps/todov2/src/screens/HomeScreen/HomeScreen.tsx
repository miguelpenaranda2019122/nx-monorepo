import { useLayoutEffect } from "react";
import styles from './styles';
import HomeScreenProps from "./types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ScrollView from 'rn-faded-scrollview';
import { PercentageCompleted } from "../../components";
import { useTranslation } from 'react-i18next';
import TasksContainer from '../../components/TasksContainer';
import ModalView from "../../components/ModalView";
import { useAppSelector, useAppDispatch, selectWorkList, selectTasksCompleted, selectModalVisible, setWorkList, setTasksCompleted, setModalVisible, WorkType} from "@to-do-redux";
import { Button } from "@to-do-components";
import Config from "react-native-config";

const { NAME, NUMBER } = Config;

const HomeScreen: React.FunctionComponent = ({navigation}: HomeScreenProps) =>{

  const { t } = useTranslation();

  const taskList = useAppSelector(selectWorkList);
  const taskListCompleted = useAppSelector(selectTasksCompleted);
  const modalVisible = useAppSelector(selectModalVisible);

  const dispatch = useAppDispatch();

  useLayoutEffect(()=> {
      navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate('ChangeLanguage')}>
              <Image source={{ uri: 'https://image.similarpng.com/very-thumbnail/2020/12/Google-translate-icon-design-on-transparent-background-PNG.png' }} style={{ width: 30, height: 30 }}/>
            </TouchableOpacity>
          ),
        });
  }, [navigation]);

  const checkItem = (task: WorkType)=>{
    let taskListCopy = [...taskList];
    let taskListCompletedCopy = [...taskListCompleted];

    if (task.check) {
       const updatedTask = {...task, check: !task.check};
       taskListCopy.push(updatedTask);
       taskListCompletedCopy = taskListCompletedCopy.filter(item => item.id !== task.id);
       dispatch(setWorkList(taskListCopy));
       dispatch(setTasksCompleted(taskListCompletedCopy));
    } else {
      const updatedTask = {...task, check: !task.check};
      taskListCompletedCopy.push(updatedTask);
      taskListCopy = taskListCopy.filter(item => item.id !== task.id)
      dispatch(setWorkList(taskListCopy));
      dispatch(setTasksCompleted(taskListCompletedCopy));
    }
  }

  const deleteItem = (id: number) => {
    let taskListCompletedCopy = [...taskListCompleted];
    taskListCompletedCopy = taskListCompletedCopy.filter(item => item.id !== id);
    dispatch(setTasksCompleted(taskListCompletedCopy));
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} allowEndFade={false}>
        <View style={styles.container}>
                <Text>{NAME}</Text>
                <Text>{NUMBER}</Text>
                <Text style={styles.task_title}>{t("allTasks")}</Text>
                <PercentageCompleted />
                {
                  taskList.length > 0 && <TasksContainer 
                                            data={taskList} 
                                            handleCheck={(task) => checkItem(task)} 
                                            handleNavigation={(id:number) => navigation.navigate("Details", {idItem: id})}/>
                }
                {
                  taskListCompleted.length > 0 &&
                  <>
                    <Text style={styles.task_title}>{t("completed")}</Text>
                    <TasksContainer 
                      pillsCompleted
                      data={taskListCompleted} 
                      handleCheck={(task) => checkItem(task)} 
                      handleDelete={(id: number) => deleteItem(id)} 
                      handleNavigation={(id:number) => navigation.navigate("Details", {idItem: id})}
                      />
                  </>
                }
        </View>
        <ModalView />
      </ScrollView>
      {
        !modalVisible &&
        <View style={{position: "absolute", bottom: 80, alignSelf: "center"}}>
          <Button 
            buttonStyle={[
              {borderWidth: 1, borderRadius: 50, height: 70, width: 70, padding: 0, justifyContent: "center", paddingLeft: 2, paddingBottom: 3},
              modalVisible ? {backgroundColor: "black"} : {backgroundColor: "white"}
            ]} 
            textStyle={[
              {fontSize: 50, fontWeight: "300"},
              modalVisible ? {color: "white", fontWeight: "200", paddingTop: 4, fontSize: 40} : {color: "black"}
            ]}
            text={modalVisible ? "✗" : "+"}
            OnPress={() => dispatch(setModalVisible(!modalVisible))}/>
        </View>
      }
    </>
  )
}

export default HomeScreen;