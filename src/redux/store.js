
import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import { 
  persistStore, 
  persistReducer, 
  FLUSH, 
  REHYDRATE, 
  PAUSE,
  PERSIST, 
  PURGE, 
  REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);



////
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
// const persistFilterConfig = {
//   key: 'filter',
//   storage,
// }

// const persistedContactsReducer = persistReducer(
//   persistConfig, 
//   contactsReducer
// );
// const persistedFilterReducer = persistReducer(
//   persistFilterConfig, 
//   filterReducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filter: persistedFilterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export const persistor = persistStore(store);
