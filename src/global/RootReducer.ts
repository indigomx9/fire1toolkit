import { configureStore } from "@reduxjs/toolkit";

export const RootReducer = configureStore({
    reducer: {
        player: () => "Redux Toolkit Player!"
    },
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;


