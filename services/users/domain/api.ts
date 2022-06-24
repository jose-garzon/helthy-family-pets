import axios from "axios";
import { config } from "../../../config";
import { LoginCredentials } from "./user.definition";

const loginRequest = (credentials: LoginCredentials) =>
  axios.post(`${config.auth.base_url}/api/auth/login`, credentials);

export { loginRequest };
