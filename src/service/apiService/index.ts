import axios, { AxiosRequestConfig } from "axios";

interface ApiService {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  update<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  setDomain(newDomain: string): void;
  setToken(newToken: string): void;
}

const createInstance = (baseURL: string, timeout: number, headers: any) => {
  return axios.create({
    baseURL,
    timeout,
    headers,
  });
};

const commonInstance = createInstance(
  process.env.REACT_APP_BASE_URL ?? "",
  10000,
  {
    "X-Custom-Header": "foobar",
  }
);

const updateToken = (instance: any, newToken: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
};

const ApiService: ApiService = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await commonInstance.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    try {
      const response = await commonInstance.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await commonInstance.delete<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  update: async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    try {
      const response = await commonInstance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async <T>(url: string, data: any, config?: AxiosRequestConfig) => {
    try {
      const response = await commonInstance.put<T>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  setDomain: (newDomain: string) => {
    commonInstance.defaults.baseURL = newDomain;
  },

  setToken: (newToken: string) => {
    updateToken(commonInstance, newToken);
  },
};

export default ApiService;
