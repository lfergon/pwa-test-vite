import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        count: 0
    }),
    actions: {
        setCount(newCount: number) {
            this.count = this.count + newCount;
        }
    },
    getters: {
        getCount: (state) => state.count
    }
});
