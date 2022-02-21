import { useCounterStore, CounterStoreType } from './pinia/counter.store.pinia';

class CounterStore {

  counterStore: CounterStoreType

  constructor() {
    this.counterStore = useCounterStore();
  }

  public subscribeToCount(callback: Function) {
    this.counterStore.$subscribe((mutation, state) => {
      callback(state.count);
    })
  }

  public getCount() {
    return this.counterStore.count;
  }

  public setCount(newCount: number) {
    this.counterStore.setCount(newCount);
  }
}

export default new CounterStore();
