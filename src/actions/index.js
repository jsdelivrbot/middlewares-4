import axios from "axios";
import { FETCH_USERS } from "./types";

export function fetchUsers() {
  const requestUsers = axios.get("https://jsonplaceholder.typicode.com/users");
  // console.log("requestUsers", requestUsers);
  return {
    type: FETCH_USERS,
    payload: requestUsers
  };
}
