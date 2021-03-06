import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
// Se usa solo para ambiente de desarrollo
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)), // desarrollo
	// applyMiddleware(thunk), // produccion
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
