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
};
