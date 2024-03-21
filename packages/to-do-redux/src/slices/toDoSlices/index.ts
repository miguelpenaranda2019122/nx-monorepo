import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WorkType, worksListInfo } from './taskList';
import { RootState } from "../../store";

type toDoState = {
    workList: WorkType[];
    text: string;
    textArea: string;
    modalVisible: boolean;
    tasksCompleted: WorkType[];
}

const initialState : toDoState = {
    workList: worksListInfo,
    text: '',
    textArea: '',
    modalVisible: false,
    tasksCompleted: [
        {
            id: 4,
            title: "Buy chicken",
            desc: "I need to buy a chicken to the dinner",
            check: true,
            tag: "Grocery",
            difficulty: "Low"
        }
    ]
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        setWorkList: (state, action: PayloadAction<WorkType[]>) => {
            state.workList = action.payload;
        },
        setText: (state, action: PayloadAction<string>) =>{
            state.text = action.payload;
        },
        setTextArea: (state, action: PayloadAction<string>) =>{
            state.textArea = action.payload;
        },
        setModalVisible: (state, action: PayloadAction<boolean>) =>{
            state.modalVisible = action.payload;
        },
        setTasksCompleted: (state, action: PayloadAction<WorkType[]>) =>{
            state.tasksCompleted = action.payload;
        }
    }
})

export const { setWorkList, setText, setTextArea, setModalVisible, setTasksCompleted } = toDoSlice.actions;

export const selectWorkList = (state: RootState) => state.workList;
export const selectText = (state: RootState ) => state.text;
export const selectTextArea = (state: RootState ) => state.textArea;
export const selectModalVisible = (state:RootState ) => state.modalVisible;
export const selectTasksCompleted = (state: RootState ) => state.tasksCompleted;

export default toDoSlice.reducer;
