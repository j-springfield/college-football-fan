import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = localStorage.getItem('appState')
    ? JSON.parse(localStorage.getItem('appState'))
    : {};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('appState', JSON.stringify(state));
});

export default store;