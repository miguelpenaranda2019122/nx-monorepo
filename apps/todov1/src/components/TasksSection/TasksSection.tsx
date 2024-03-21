import { FlatList, Text, View } from "react-native";
import { useAppDispatch, useAppSelector, selectWorkList, setWorkList,  } from "@to-do-redux";
import { useTranslation } from 'react-i18next';
import styles from "./styles";
import { Task, Button } from '@to-do-components';

type PropsTypes = {
    navTo: (id: number) => void;
}

const TasksSection: React.FunctionComponent<PropsTypes> = (props)=>{

    const { t } = useTranslation();

    const workList = useAppSelector(selectWorkList);
    const dispatch = useAppDispatch();

    const checkItem = (id: number) => {
        let taskListCopy = [...workList];
        const index = taskListCopy.findIndex(item => item.id === id);
        let item = {...taskListCopy[index]};
        item.check = !item.check;
        taskListCopy[index] = item;
        dispatch(setWorkList(taskListCopy));
    }

    const deleteItem = (id: number) => {
        let taskListCopy = workList.filter((item => item.id !== id));
        dispatch(setWorkList(taskListCopy));
    }

    if (workList.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontWeight: "300", fontSize: 20 }}>{t("listEmptyText")}</Text>
            </View>
        );
    };

    return (
        <View style={[styles.container]}>
            <FlatList
                style={{padding: 20}}
                ItemSeparatorComponent={() => <View style={{height: 30}} />}
                data={workList}
                keyExtractor={task => task.id.toString()}
                renderItem={
                    ({item}) => 
                        <Task 
                          title={item.title} 
                          check={item.check}
                          key={item.id}
                          underlined
                          deletable
                          handleCheck={() => checkItem(item.id)}
                          navTo={() => props.navTo(item.id)}
                          deleteItem={() => deleteItem(item.id)}
                        />
                }
            />
            <Button 
                buttonStyle={{alignSelf: "flex-end"}}
                text={t("buttonClearText")}
                OnPress={() => dispatch(setWorkList([]))}
                />
        </View>
    )
}

export default TasksSection;