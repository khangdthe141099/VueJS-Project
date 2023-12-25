export default {
  requests: (state, _getter, _rootState, rootGetter) => {
    const coachId = rootGetter.userId
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests: (state, getter) => {
    return getter.requests && getter.requests.length > 0;
  }
};
