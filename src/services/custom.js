import axios from "axios";
export function getCountrytList() {
  return axios.get("/api/country").then((data) => data);
}

export function getStatetList(id) {
  return axios.get(`/api/state/${id}`).then((data) => data);
}
export function getCityList(id) {
  return axios.get(`/api/city/${id}`).then((data) => data);
}
