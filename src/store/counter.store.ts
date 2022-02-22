import { useCounterStore } from './pinia/counter.store.pinia';

class CounterStore {

  subscribeToCount(callback: Function) {
    useCounterStore().$subscribe((mutation, state) => {
      callback(state.count);
    })
  }

  getCount() {
    return useCounterStore().count;
  }

  setCount(newCount: number) {
    useCounterStore().setCount(newCount);
  }
}

export default new CounterStore();
