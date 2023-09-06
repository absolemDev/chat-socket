import httpService from "./http.service";

const topicEndPoint = "/topic";

const topicService = {
  fetchAll: async () => {
    const { data } = httpService.get(topicEndPoint);
    return data;
  },
};

export default topicService;
