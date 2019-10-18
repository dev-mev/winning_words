import axios from 'axios'

export default {
  getDefinitions(search) {
    return axios.get("/" + encodeURIComponent(search) + "?key=0a2f2174-af21-47d7-a627-532fff382339")
      .then(response => { 
        if (response !== "" && response !== undefined) {
          return response.data[0].shortdef[0]
        } 
        return "definition unavailable"
      });
  }
}