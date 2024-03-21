import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import styles from './styles';
import { useAppSelector, selectWorkList, selectTasksCompleted } from '@to-do-redux';
import { useTranslation } from 'react-i18next';

const PercentageCompleted: React.FunctionComponent = () => {

    const taskList = useAppSelector(selectWorkList);
    const taskCompletedList = useAppSelector(selectTasksCompleted);
    const [percentage, setPercentage] = useState<number>(0);

    const { t } = useTranslation();
    
    useEffect(()=>{
        if (taskList.length < 0) {
            return;
        }

        const allTasks = taskList.length + taskCompletedList.length;

        setPercentage((taskCompletedList.length / allTasks) * 100);

    }, [taskList, taskCompletedList, percentage])

    if (taskList.length < 1 && percentage !== 100) {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30, fontWeight: "200"}}>{t("listEmptyText")}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={{fontWeight: "500"}}>{t("percent1")}</Text>
                <Text style={{fontSize: 40, fontWeight: "bold"}}>{percentage.toFixed(0)} %</Text>
                <Text style={{fontWeight: "500"}}>{t("percent2")}</Text>
            </View>
            <View>
                <CircularProgress 
                    value={percentage} 
                    duration={1500} 
                    radius={55} 
                    progressValueColor='black'
                    activeStrokeColor='#fff' 
                    inActiveStrokeColor='black'
                    activeStrokeWidth={8}
                    />
            </View>
        </View>
    )
}

export default PercentageCompleted