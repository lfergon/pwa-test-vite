import { mount } from '@vue/test-utils';
import { test, expect } from 'vitest';
import Counter from '../views/Counter.vue';

test('mount component', async () => {
  expect(Counter).toBeTruthy();

  const wrapper = mount(Counter, {
    props: {
      count: 0,
    },
  });

  expect(wrapper.text()).toContain('This is the Counter page');
});
