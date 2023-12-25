//Mutation chỉ thực hiện nhiệm vụ thao tác với state trong store
export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
};
