import axios from 'axios'

export default {
  getDefinitions(search) {
    return axios.get("/" + encodeURIComponent(search) + "?key=")
      .then(response => { return response.data });
  }
}