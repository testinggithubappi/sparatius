import axios from "axios";
export function getList() {
  return axios.get("/api/services").then((data) => data);
}
export function getNotificationList() {
  return axios.get("/api/get-notification").then((data) => data);
}
export function getNotificationCount() {
  return axios.get("/api/get-notification-count").then((data) => data);
}

export function setItem(item) {
  return fetch("/api/services", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  }).then((data) => data);
}
