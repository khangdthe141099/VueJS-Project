export default {
  coaches(state: any) {
    return state.coaches;
  },
  hasCoaches(state: any) {
    return state.coaches && state.coaches.length > 0;
  },
};
