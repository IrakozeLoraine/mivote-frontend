import axios from 'axios';

const baseUrl = 'http://localhost:4500/api/v1';

export async function signup(signupInfo) {
  const response = await axios.post(`${baseUrl}/auth/register`, signupInfo);
  return response.data;
}

export async function signin(signinInfo) {
  const response = await axios.post(`${baseUrl}/auth/login`, signinInfo);
  return response.data;
}
