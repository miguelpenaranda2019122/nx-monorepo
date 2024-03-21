import { WorkType } from '@to-do-redux';
import { Task, Pill } from "@to-do-components";
import { Colors } from "../../styles";


interface PillsContainerProps {
    pillsCompleted?: boolean;
    data: WorkType[];
    handleCheck: (task: WorkType) => void;
    handleDelete?: (id: number) => void;
    handleNavigation?: (id: number) => void;
}

const PillsColors = {
    Chores: Colors.PILL_GREEN,
    Work: Colors.PILL_ROSE,
    Grocery: Colors.PILL_YELLOW,
    Hobby: Colors.BG_SECONDARY,
    Other: Colors.PILL_RED,
    Low: Colors.PILL_GREEN,
    Medium: Colors.PILL_YELLOW,
    High: Colors.PILL_RED
}

const TasksContainer: React.FunctionComponent<PillsContainerProps> = (props) => {

    const { pillsCompleted, data, handleCheck, handleDelete, handleNavigation } = props;

    if (pillsCompleted) {
        return (
            <>
                {
                    data.map(item => (
                        <Task 
                            key={item.id}
                            check={item.check} 
                            title={item.title}
                            deletable
                            taskStyles={{marginTop: 3, justifyContent: "space-around"}}
                            deleteItem={() => handleDelete(item.id)}
                            handleCheck={() => handleCheck(item)}
                            navTo={() => handleNavigation(item.id)}
                        />
                    ))
                }
            </>
        )
    }


    return (
        <>
            {
                data.map(item => (
                    <Task 
                        key={item.id}
                        check={item.check} 
                        title={`${item.title.slice(0, 22)}${(item.title.slice(0,22).length < item.title.length) ? "..." : ""}`}
                        textStyles={{fontWeight: "700", fontStyle: "italic", letterSpacing: 1, paddingLeft: 15}}
                        taskStyles={{justifyContent: "space-around", marginHorizontal: 10, marginTop: 3}}
                        rigthPill={<Pill 
                                        bgColor={
                                            item.difficulty === "Low"
                                            ? PillsColors.Low
                                            : item.difficulty === "Medium"
                                            ? PillsColors.Medium
                                            : PillsColors.High
                                        }
                                        label={item.difficulty === "Medium" ? "Med" : item.difficulty}
                                />
                                }
                        underTextPill={<Pill 
                                        point
                                        bgColor={
                                            item.tag === "Chores"
                                            ? PillsColors.Chores
                                            : item.tag === "Grocery"
                                            ? PillsColors.Grocery
                                            : item.tag === "Hobby"
                                            ? PillsColors.Hobby
                                            : item.tag === "Work"
                                            ? PillsColors.Work
                                            : PillsColors.Other
                                        }
                                        label={item.tag}
                                        pillStyles={{borderColor: "black"}}

                        />
                        }
                        handleCheck={() => handleCheck(item)}
                        navTo={() => handleNavigation(item.id)}
                    />
                ))
            }
        </>
    )
}

export default TasksContainer;