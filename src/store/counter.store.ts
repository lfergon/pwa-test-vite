import { useCounterStore, CounterStoreType } from './pinia/counter.store.pinia';

class CounterStore {

  counterStore: CounterStoreType

  constructor() {
    this.counterStore = useCounterStore();
  }

  subscribeToCount(callback: Function) {
    this.counterStore.$subscribe((mutation, state) => {
      callback(state.count);
    })
  }

  getCount() {
    return this.counterStore.count;
  }

  setCount(newCount: number) {
    this.counterStore.setCount(newCount);
  }
}

export default new CounterStore();
