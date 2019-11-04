import axios from "axios";

export default {
  getDefinitions(search) {
    return axios.get("/" + encodeURIComponent(search) + "?key=")
      .then((response) => {
        if (response.data.length > 1) {
          return "Definition is unavailable";
        }
        return response.data[0].shortdef[0];
      });
  }
};
