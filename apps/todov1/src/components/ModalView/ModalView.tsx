import { Alert, Modal, Text, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { useAppSelector, useAppDispatch, selectWorkList, selectText, selectTextArea, selectModalVisible, setModalVisible, setTextArea, setWorkList, setText } from '@to-do-redux';
import { Button } from '@to-do-components';

const ModalView: React.FunctionComponent = ()=> {

    const { t } = useTranslation();

    const workList = useAppSelector(selectWorkList);
    const text = useAppSelector(selectText);
    const textArea = useAppSelector(selectTextArea);
    const modalVisible = useAppSelector(selectModalVisible);

    const dispatch = useAppDispatch();

    const addItem = () => {
        
        if (!textArea.trim()) {
            Alert.alert(
             `${t("modalAlertTitleText")}`,
             `${t("modalAlertDescText")}`,
             [
                 {text: "OK"}
             ]
            );
            return;
         }

        const maxId = workList.reduce((max: number, work: { id: number }) => Math.max(max, work.id), 0);
        const newWork = {
            id: maxId + 1,
            title: text,
            desc: textArea,
            check: false
        }
        dispatch(setWorkList([...workList, newWork]));
        dispatch(setText(''));
        dispatch(setTextArea(''));
        dispatch(setModalVisible(false));
    }


    return (
        <View style={styles.container}>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => dispatch(setModalVisible(!modalVisible))}
                >
                <View style={styles.container}>
                <View style={styles.modalView}>
                        <Text style={styles.title}>{t("modalTitle")}</Text>
                        <TextInput multiline={true}
                            numberOfLines={8}
                            style={styles.textarea}
                            placeholder={t("textAreaText")}
                            placeholderTextColor={"#C5C5C5"}
                            onChangeText={(someText: string) => dispatch(setTextArea(someText))}
                            defaultValue={textArea} />
                        <View style={{flexDirection: "row", gap: 10}}>
                            <Button text={t("buttonBack")} OnPress={() => dispatch(setModalVisible(!modalVisible))} buttonStyle={{backgroundColor: "black", flex: 1}}/>
                            <Button text={t("buttonCreate")} OnPress={() => addItem()} buttonStyle={{flex: 1}}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalView;