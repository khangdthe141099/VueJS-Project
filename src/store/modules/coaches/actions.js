//Action sẽ chạy trước mutation:
export default {
  async registerCoach(context, data) {
    //Mapper key truyền từ form tương ứng với key lưu trữ data:
    const userId = context.rootGetters.userId;

    const coachData = {
      id: userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    const response = await fetch(
      `https://vue-project-6e7b0-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`,
      {
        method: 'POST',
        body: JSON.stringify(coachData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    //Với registerCoach là mutation function
    //    coachData là dữ liệu vừa mapper
    context.commit('registerCoach', {
      ...coachData,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-project-6e7b0-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        ...responseData[key],
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};
