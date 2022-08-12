import axios from 'axios';

const link = 'http://localhost:3001/';

export default class ServiceApi {
  static async getPosts(page = 1, limit = 3) {
    const req = await axios.get(`${link}news/get?page=${page}&limit=${limit}`);
    return req.data;
  }
  static async login(username, password) {
    const req = await axios.post(`${link}auth/login`, { username, password });
    if (req.status == 200) {
      return req.data;
    }
    return false;
  }

  static async register(user) {
    try {
      const req = await axios.post(`${link}auth/register`, user);
      return req;
    } catch (e) {
      console.log(e);
    }
  }

  static async continueRegistration(user) {
    try {
      const req = await axios.post(`${link}auth/continue-registration`, user);
      return req;
    } catch (e) {
      console.log(e);
    }
  }

  static async checkToken(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    const req = await axios.post(`${link}auth/token-verify`);
    if (req.status == 200) {
      return req.data;
    }
    return false;
  }

  static async sendActivationCode(email) {
    try {
      const req = await axios.post(`${link}auth/send-code`, { email });
      return req;
    } catch (e) {
      console.log(e);
    }
  }

  static async activateAccount(data) {
    try {
      const req = await axios.post(`${link}auth/check-activation-code`, data);
      return req;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  static async getItems(page, limit = 12) {
    const req = await axios.get(`${link}items/get?page=${page}&limit=${limit}`);
    return req;
  }

  static async getItemByID(id) {
    const req = await axios.get(`${link}items/get/${id}`);
    return req.data;
  }

  static async getAllItemsByTags(ids, page) {
    const tags = ids.map((i) => i.tags);
    const req = await axios.get(
      `${link}items/get/tagss?tags=${tags}&page=${page}`
    );
    return req.data;
  }

  static async getAllItemsByCategory(id) {
    const req = await axios.get(`${link}items/get/category/${id}`);
    return req.data;
  }

  static async getTags() {
    const req = await axios.get(`${link}items/tags`);
    return req.data;
  }
}
