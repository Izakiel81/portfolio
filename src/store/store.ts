import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {visualSlice} from "@/store/visual/visual.slice";
import {Reducer} from "react";

const persistConfig : PersistConfig<any> = {
    key: 'portfolio-next',
    storage,
    whitelist: ['visual']
}


const rootReducer = combineReducers({
    visual: visualSlice.reducer,
}) as Reducer<any, any>;

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    } as any),
});
export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;