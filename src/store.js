import reducer from './reducers/index';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default store = createStore(reducer, applyMiddleware(thunk));


