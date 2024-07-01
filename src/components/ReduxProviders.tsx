import React, {FC, PropsWithChildren} from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "@/store/store";

const ReduxProviders:FC<PropsWithChildren<any>>
    = ({children}) => {
    return (
            <div>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                        {children}
                </PersistGate>
            </Provider>
        </div>
    );
};

export default ReduxProviders;