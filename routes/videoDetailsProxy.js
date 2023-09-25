const axios = require("axios");

//* Reaching out to brainFlix api to get the video details by videoId:
const getVideoDetails = (req, res, videoId) => {
  const API_KEY = "?api_key=4a33759a-a8e6-4bfa-9287-73814c966efd";

  axios
    .get(`https://project-2-api.herokuapp.com/videos/${videoId}${API_KEY}`)

    .then((axiosResponse) => {
      res.status(200).json({
        status: "success",
        data: { ...axiosResponse.data },
      });
    })

    .catch((e) => {
      res
        .status(500)
        .json({ status: "fail", message: `Got an error: ${String(e)}` });
    });
};

module.exports = getVideoDetails;
