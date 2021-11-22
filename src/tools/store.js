import {rootReducer} from '../reducers/RootReducer';
import { createStore } from 'redux';

export const store = createStore(rootReducer);