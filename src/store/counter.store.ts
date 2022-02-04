import vuexStore from './vuex/counter.store.vuex';
import { VUEX_MUTATION_SET_COUNT } from './vuex/counter.store.vuex.mutations';

class CounterStore {
  public subscribeToCount(callback: Function) {
    vuexStore.subscribe((mutation, state) => {
      callback(state.count);
    });
  }

  public getCount() {
    return vuexStore.state.count;
  }

  public setCount(newCount: number) {
    vuexStore.commit(VUEX_MUTATION_SET_COUNT, newCount);
  }
}

export default new CounterStore();
