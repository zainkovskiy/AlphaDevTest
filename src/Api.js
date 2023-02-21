import axios from "axios";

export const getSpeakersAPI = async () => {
  const res = await axios.get('https://pro.alphadevteam.com/api/tz/speakers');
  if(res.status === 200 && res.statusText === "OK"){
    return res.data;
  }
}