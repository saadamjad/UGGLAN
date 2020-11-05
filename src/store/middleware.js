import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [];

// const reactNavigation = createReactNavigationReduxMiddleware(
//   (state) => state.router,
//   'root',
// );

// if (__DEV__) {
//   middlewares.push(createLogger());
// }

// middlewares.push(reactNavigation);
middlewares.push(promise);
// middlewares.push(logger);
middlewares.push(thunk);

export default middlewares;
