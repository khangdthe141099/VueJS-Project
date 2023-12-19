import { coachesList } from './../../../const/dummyData';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: coachesList
    }
  },
  mutations,
  actions,
  getters
};
