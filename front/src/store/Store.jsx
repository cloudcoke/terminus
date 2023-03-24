import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./rootReducer"

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
