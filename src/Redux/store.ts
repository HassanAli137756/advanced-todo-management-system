import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./AuhtSlice";
import { todoReducer } from "./TodoSlice";

export const store = configureStore(
{
    reducer:
    {
        authReducer: authReducer,
        todoReducer: todoReducer
    }
}
)