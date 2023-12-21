//Action sẽ chạy trước mutation:
export default {
  registerCoach(context, data) {
    //Mapper key truyền từ form tương ứng với key lưu trữ data:
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    //Với registerCoach là mutation function
    //    coachData là dữ liệu vừa mapper
    context.commit('registerCoach', coachData);
  },
};
