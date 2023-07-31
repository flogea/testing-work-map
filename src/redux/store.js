import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import routerReducer from './router/routerSlice';
import rootSaga from './rootSaga';

const loggerMiddleware = createLogger({
  collapsed: false,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: routerReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(rootSaga);
