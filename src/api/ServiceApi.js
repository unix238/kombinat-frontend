import axios from "axios";

// const link = "http://localhost:8080/";
const link = "http://dev.kmbinat.com/";

export default class ServiceApi {
  static async getPosts(page = 1, limit = 3) {
    const req = await axios.get(`${link}news/get?page=${page}&limit=${limit}`);
    return req.data;
  }

  static async getPostById(id) {
    const req = await axios.get(`${link}news/get/${id}`);
    return req.data;
  }

  static async googleAuth(response) {
    const req = await axios.post(`${link}auth/google`, { response });
    return req.data;
  }

  static async login(userLogin, password) {
    const req = await axios.post(`${link}auth/login`, { userLogin, password });
    if (req.status == 200) {
      return req.data;
    } else {
      localStorage.removeItem("token");
      return false;
    }
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
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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

  static async getCategories() {
    const req = await axios.get(`${link}items/categories`);
    return req.data;
  }

  static async getBrands() {
    const req = await axios.get(`${link}items/brands`);
    return req.data;
  }

  static async getFilteredItems(filters, page = 1, limit = 12) {
    const req = await axios.post(
      `${link}items/get/filters?page=${page}&limit=${limit}`,
      filters
    );
    return req;
  }

  static async getItemsBySearch(items) {
    const req = await axios.get(`${link}items/basket-items`, {
      params: {
        items: items.map((i) => i._id),
      },
    });
    return req;
  }

  static async updateUser(data) {
    try {
      const req = await axios.post(`${link}auth/update`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return req;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateDelivery(data) {
    try {
      const req = await axios.post(`${link}auth/delivery`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      return req;
    } catch (e) {
      console.log(e);
    }
  }
}
