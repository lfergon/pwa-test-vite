import {  defineStore, Store } from 'pinia';

export type CounterStoreType = Store<"counterStore", {
    count: number;
}, {}, {
    setCount(newCount: number): void;
}>;

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        count: 0
    }),
    actions: {
        setCount(newCount: number) {
            this.count = newCount;
        }
    }
});