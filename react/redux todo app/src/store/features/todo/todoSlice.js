import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        },
        deleteTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((t) => t.id !== action.payload),
            }
        },
        toggleTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.map((t) => {
                    if (t.id === action.payload) {
                        return {
                            ...t,
                            isComplete: !t.isComplete,
                        }
                    }
                    return t;
                }),
            }
        },
    }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;