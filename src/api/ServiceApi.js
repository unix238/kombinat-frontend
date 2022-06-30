import axios from 'axios';

const link = 'http://localhost:3001/';

export default class ServiceApi {
  static async getPosts(page = 1, limit = 3) {
    const req = await axios.get(`${link}news/get?page=${page}&limit=${limit}`);
    console.log(req.data);
    return req.data;
  }
  static async login(username, password) {
    const req = await axios.post(`${link}auth/login`, { username, password });
    if (req.status == 200) {
      return true;
    }
    return false;
  }

  static async checkToken(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    const req = await axios.post(`${link}auth/token-verify`);
    if (req.status == 200) {
      return req.data;
    }
    return false;
  }
}
