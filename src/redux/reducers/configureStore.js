import {createStore} from "redux";
import rootReducer from './index';
import {persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
    //stateRocenciler:State değişince ne olacağı belirleniyor.
    //TiplerihardSet ,autoMergeLevel1 ve autoMergeLevel2 Olarak
    stateReconciler: autoMergeLevel2,
    //blacklist:['todos'], //Istemediğimiz stateleri burada belirteceğiz.
    //whitelist: ['todos'],//Whitelist stateler belirlenecek. Kullanılacak stateleri burda belirtiyoruz.

};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
export default store;