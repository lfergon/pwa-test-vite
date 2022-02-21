import CounterState from '../counter.store.interface';

export const VUEX_MUTATION_SET_COUNT = 'SET_COUNT';

export default {
  [VUEX_MUTATION_SET_COUNT](state: CounterState, newCount: number) {
    state.count = newCount;
  },
};
