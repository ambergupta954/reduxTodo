import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig,reducers);
let store = createStore(
    persistedReducer
);

let persistor = persistStore(store);
export { store, persistor };