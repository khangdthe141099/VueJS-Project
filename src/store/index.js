import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {
    return {
      userId: 'a3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
