import { createStore } from 'vuex';
import mutations from './counter.store.vuex.mutations';
import { CounterState } from '../counter.store.interface';

const state: CounterState = {
  count: 0,
};

export default createStore({
  state,
  mutations,
});
