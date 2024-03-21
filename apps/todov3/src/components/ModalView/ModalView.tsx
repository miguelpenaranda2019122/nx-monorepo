import { Alert, Text, TextInput, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { useAppSelector, useAppDispatch, 
         selectWorkList, selectText, selectTextArea, 
         selectModalVisible, setModalVisible, setWorkList, 
         setText, WorkType, Tag, Difficulty, selectTasksCompleted, setTextArea } from '@to-do-redux';
import { Button, Input, Pill } from '@to-do-components';
import Modal from "react-native-modal";
import {Colors} from '../../styles';
import { useState } from 'react';

interface BaseProperties {
    id: number;
    color: string;
    isActive: boolean;
}

interface TagsProperties extends BaseProperties{
    name: Tag;
}

interface DifficultyProperties extends BaseProperties{
    name: Difficulty;
}

const TagsArray: TagsProperties[] = [
    {
        id: 1,
        name: "Chores",
        color: Colors.PILL_GREEN,
        isActive: false
    },
    {
        id: 2,
        name: "Work",
        color: Colors.PILL_ROSE,
        isActive: false
    },
    {
        id: 3,
        name: "Grocery",
        color: Colors.PILL_YELLOW,
        isActive: false
    },
    {
        id: 4,
        name: "Hobby",
        color: Colors.BG_SECONDARY,
        isActive: false
    },
    {   
        id: 5,
        name: "Other",
        color: Colors.PILL_RED,
        isActive: false
    }
]

const DifficultyArray: DifficultyProperties[] = [
    {
        id: 1,
        name: "Low",
        color: Colors.PILL_GREEN,
        isActive: false
    },
    {
        id: 2,
        name: "Medium",
        color: Colors.PILL_YELLOW,
        isActive: false
    },
    {
        id: 3,
        name: "High",
        color: Colors.PILL_RED,
        isActive: false
    }
]

const ModalView: React.FunctionComponent = ()=> {

    const { t } = useTranslation();

    const workList = useAppSelector(selectWorkList);
    const taskCompleted = useAppSelector(selectTasksCompleted);
    const text = useAppSelector(selectText);
    const textArea = useAppSelector(selectTextArea);
    const modalVisible = useAppSelector(selectModalVisible);
    

    const [tagsArray, setTagsArray] = useState(TagsArray);
    const [difficultyArray, setDifficultyArray] = useState(DifficultyArray);

    const [tagSelected, setTagSelected] = useState<Tag>();
    const [difficultySelected, setDifficultySelected] = useState<Difficulty>();

    const dispatch = useAppDispatch();

    const handleTagSelected = (id: number) => {
        let tagsArrayCopy = [...tagsArray];
        
        tagsArrayCopy.forEach(tag => {
            if (tag.id === id) {
                setTagSelected(tag.name);
                tag.isActive = true;
            } else tag.isActive = false;
        });

        setTagsArray(tagsArrayCopy);
    }

    const handleDifficultySelected = (id: number) =>{
        let difficultyArrayCopy = [...difficultyArray];

        difficultyArrayCopy.forEach(item => {
            if (item.id === id) {
                setDifficultySelected(item.name);
                item.isActive = true;
            } else item.isActive = false;
        });

        setDifficultyArray(difficultyArrayCopy);
    }

    const clearForm = () => {
        
        tagsArray.map(item =>{
            if (item.isActive === true) item.isActive = false;
        })
        
        difficultyArray.map(item =>{
            if (item.isActive === true) item.isActive = false;
        })

        dispatch(setModalVisible(!modalVisible));
        dispatch(setText(""));
        dispatch(setTextArea(""));
        setDifficultySelected(undefined);
        setTagSelected(undefined);
        // setTagsArray(TagsArray);
        // setDifficultyArray(DifficultyArray);
    }

    const validatedForm = () => {
        if (!text.trim()) {
            Alert.alert(
            `${t("inputAlertTitleText")}`,
            `${t("inputAlertDescText")}`,
            [
                {text: "OK"}
            ]
            );
            return false;
        } else if (!textArea.trim()) {
            Alert.alert(
             `${t("modalAlertTitleText")}`,
             `${t("modalAlertDescText")}`,
             [
                 {text: "OK"}
             ]
            );
            return false;
         } else if (tagSelected === undefined || !tagSelected.trim()) {
            Alert.alert(
                "Select one tag for the task",
                "Please, select a tag before creating a new work to do",
                [
                    {text: "OK"}
                ]
                );
            return false;
         } else if (difficultySelected === undefined || !difficultySelected.trim()) {
            Alert.alert(
                "Select one priority level for the task",
                "Please, select a priority level before creating a new work to do",
                [
                    {text: "OK"}
                ]
                );
            return false;
         }
         return true;
    }

    const addItem = () => {
        if (!validatedForm()) {
            return;
        }
        const allTaskArray = [...workList, ...taskCompleted]

        const maxId = allTaskArray.reduce((max: number, work: { id: number }) => Math.max(max, work.id), 0);
        const newWork: WorkType = {
            id: maxId + 1,
            title: text,
            desc: textArea,
            check: false,
            tag: tagSelected,
            difficulty: difficultySelected
        }
        dispatch(setWorkList([newWork, ...workList]));
        clearForm();
    }

    return (
        <Modal 
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            isVisible={modalVisible}
            onBackdropPress={() => dispatch(setModalVisible(!modalVisible))}
            animationInTiming={350}
            animationOutTiming={260}
            backdropOpacity={0.5}
            >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{t("newTask")}</Text>
                    <Text style={styles.task_title}>{t("taskTitle")}</Text>
                    <Input 
                        inputStyles={{borderRadius: 10, backgroundColor: Colors.BG_TEXTAREA}} 
                        placeholder={t("inputText")} 
                        defaultValue={text}
                        onChangeText={(text: string) => dispatch(setText(text))}
                    />
                    <Text style={styles.task_title}>{t("taskDetails")}</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={8}
                        style={styles.textarea}
                        placeholder={t("textAreaText")}
                        placeholderTextColor={"#C5C5C5"}
                        onChangeText={(someText: string) => dispatch(setTextArea(someText))}
                        defaultValue={textArea} />
                    <Text style={styles.task_title}>{t("addTags")}</Text>
                    <View style={{flexWrap: "wrap", gap: 5, flexDirection: "row"}}>
                        {
                            tagsArray.map(tag => (
                                <Pill 
                                    key={tag.id}
                                    label={tag.name} 
                                    bgColor={tag.isActive ? tag.color : "white"} 
                                    pillStyles={{borderColor: "black"}}
                                    pressable
                                    onPress={() => handleTagSelected(tag.id)}
                                />
                            ))
                        }
                    </View>
                    <Text style={styles.task_title}>{t("addPriorityLevel")}</Text>
                    <View style={{flexWrap: "wrap", gap: 5, flexDirection: "row"}}>
                        {
                            difficultyArray.map(tag => (
                                <Pill 
                                    key={tag.id}
                                    label={tag.name} 
                                    bgColor={tag.isActive ? tag.color : "white"} 
                                    pillStyles={{borderColor: "black"}}
                                    pressable
                                    onPress={() => handleDifficultySelected(tag.id)}
                                />
                            ))
                        }
                    </View>
                    <View>
                        <Button  
                            text={t("save")}
                            buttonStyle={{alignSelf: "center", backgroundColor: "black", borderWidth: 1, marginTop: 20}}
                            textStyle={{color: "white", fontWeight: "500"}}
                            OnPress={() => addItem()}
                            iconPrompt={<Image source={require('../../assets/save.png')} style={{ width: 17, height: 17 }}/>}
                            />
                    </View>
                </View>
                <View style={{position: "absolute", bottom: 30, alignSelf: "center"}}>
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
                        OnPress={() => clearForm()}/>
                </View>
            </View>
        </Modal>
    )
}

export {TagsArray, DifficultyArray}

export default ModalView;