import { createStore, Store } from 'redux';

import reducer from './reducer';

const store: Store<IGame, GameAction> = createStore(reducer);

export default store;
