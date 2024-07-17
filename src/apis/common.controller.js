import axios from "axios";

export class Api {
  base_url = process.env.REACT_APP_BASE_URL;

  // axios static instance
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.base_url,
      // default headers
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async sendRequest({ method, url, data, config }) {
    return await this.axiosInstance.request({
      url,
      method,
      data,
      ...config,
    });
  }

  async get(url, config) {
    return await this.sendRequest({
      method: "get",
      url,
      config,
    });
  }

  async post(url, body, config) {
    return await this.sendRequest({
      method: "post",
      url,
      data: body,
      config,
    });
  }

  async put(url, body, config) {
    return await this.sendRequest({
      method: "put",
      url,
      data: body,
      config,
    });
  }

  async patch(url, body, config) {
    return await this.sendRequest({
      method: "patch",
      url,
      data: body,
      config,
    });
  }
}
