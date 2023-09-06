import httpService from "./http.service";

const topicEndPoint = "/topics";

const topicService = {
  fetchAll: async () => {
    const { data } = await httpService.get(topicEndPoint);
    return data;
  },
};

export default topicService;
