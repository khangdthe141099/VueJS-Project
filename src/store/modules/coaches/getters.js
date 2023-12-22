export default {
  coaches: (state) => {
    return state.coaches;
  },
  getCoachById: (state) => (id) => {
    return state.coaches.find((coach) => coach.id === id);
  },
  hasCoaches: (state) => {
    return state.coaches && state.coaches.length > 0;
  },
  //Thêm _ trước tham số thể hiện có khai báo nhưng không sử dụng chúng:
  isCoach(_state, getters, _rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },
};
